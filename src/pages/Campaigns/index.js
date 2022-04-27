import DataTable from '@/components/DataTable';
import React, { useState, useEffect, useCallback } from 'react';
import { getUsersInfo } from '@/redux/users/UserAction';
import localization from '@/utils/localization';
import { useDispatch, useSelector } from 'react-redux';
import useLoader from '@/hooks/useLoader';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { GLOBALCONSTANTS } from '@/utils/GlobalConstants';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { prepareData } from './helperFunctions';
import { columns, options } from './tableMetadata';
import { initalCampaignData } from './initalCampaignData';

const dateFormat = GLOBALCONSTANTS.DATE_FORMAT;

function CampaignList() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userReducer.userList);
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState(initalCampaignData);
  const [filterData, setFilterData] = useState(initalCampaignData);
  const [inputData, setInputData] = useState(new Map());
  const [loader, startLoader, stopLoader] = useLoader();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterList, setFilertList] = useState([null, null]);

  const checkYear = moment().format('YY');
  const minEndDate =
    filterList[0] ||
    moment()
      .subtract(100 + Number(checkYear), 'years')
      .format(dateFormat);
  const maxStartDate =
    filterList[1] ||
    moment()
      .add(100 - Number(checkYear), 'years')
      .format(dateFormat);

  if (!mounted) {
    dispatch(getUsersInfo());
  }

  useEffect(() => {
    updateInputData(initalCampaignData);
    setMounted(true);
  }, [updateInputData]);

  useEffect(() => {
    const processdData = prepareData(inputData, userList);
    setData(processdData);
  }, [userList, inputData]);

  useEffect(() => {
    const newFilterData = data.filter((d) => {
      let searchCheck = true;
      const campaignName = d[0] ? d[0].toLowerCase() : null;
      if (searchQuery || campaignName) {
        searchCheck = campaignName.includes(searchQuery.toLowerCase());
      }

      const startCheck = filterList[0];
      const endCheck = filterList[1];
      let startValid = true;
      let endValid = true;
      if (startCheck) {
        const startDate = d[2] || null;
        startValid = moment(startDate).isSameOrAfter(startCheck);
      }
      if (endCheck) {
        const endDate = d[3] || null;
        endValid = moment(endDate).isSameOrBefore(endCheck);
      }

      return searchCheck && startValid && endValid;
    });
    setFilterData(newFilterData);
  }, [data, searchQuery, filterList]);

  const updateInputData = useCallback(
    (receivedData = []) => {
      const checkArr = Array.isArray(receivedData);
      if (checkArr) {
        startLoader();
        const processedData = new Map();
        receivedData.forEach((item) => {
          processedData.set(item?.id, item);
        });
        const updatedInput = new Map([...inputData, ...processedData]);
        setTimeout(() => {
          setInputData(updatedInput);
          stopLoader();
        }, 3000);
      }
    },
    [inputData, startLoader, stopLoader],
  );

  window.AddCampaigns = updateInputData;

  return (
    <>
      {loader}
      <Box sx={{ flexGrow: 1, padding: '12px' }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
              <DatePicker
                data-testid="start-filter"
                autoOk
                inputVariant="outlined"
                label={localization.tableColumns.startDate}
                value={filterList[0] || null}
                format={dateFormat}
                clearable
                maxDate={maxStartDate}
                onChange={(event) => {
                  const updateVal = event ? event.format(dateFormat) : null;
                  const newFilterList = [...filterList];
                  newFilterList[0] = updateVal;
                  setFilertList(newFilterList);
                }}
              />
              <DatePicker
                autoOk
                data-testid="end-filter"
                className="end-date"
                inputVariant="outlined"
                label={localization.tableColumns.endDate}
                value={filterList[1] || null}
                format={dateFormat}
                clearable
                minDate={minEndDate}
                onChange={(event) => {
                  const updateVal = event ? event.format(dateFormat) : null;
                  const newFilterList = [...filterList];
                  newFilterList[1] = updateVal;
                  setFilertList(newFilterList);
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="search-bar"
              data-testid="search-bar"
              className="text"
              value={searchQuery}
              onInput={(e) => setSearchQuery(e.target.value)}
              label={localization.labels.search}
              variant="outlined"
              placeholder={localization.placeHolders.search}
              size="small"
            />
          </Grid>
        </Grid>
      </Box>
      <DataTable title="" data={filterData} columns={columns} options={options} />
    </>
  );
}

export default CampaignList;
