import DataTable from '@/components/DataTable';
import React, { useState, useEffect } from 'react';
import { getUsersInfo } from '@/redux/users/UserAction';
import localization from '@/utils/localization';
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import useLoader from '@/hooks/useLoader';
import { prepareData } from './helperFunctions';

function CampaignList() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userReducer.userList);
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState(new Map());
  const dateFormat = 'YYYY-MM-DD';
  const [loader, startLoader, stopLoader] = useLoader(); 

  if (!mounted) {
    dispatch(getUsersInfo());
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
      const processdData = prepareData(inputData, userList);
      setData(processdData);
  }, [userList, inputData]);

  const updateInputData = (receivedData = []) => {
    startLoader();
    const checkArr = Array.isArray(receivedData);
    if (checkArr) {
      const processedData = new Map();
      receivedData.forEach((item) => {
        processedData.set(item?.id, item);
      });
      const updatedInput = new Map([...inputData, ...processedData]);
      setTimeout(() => {
        setInputData(updatedInput)
        stopLoader();
      }, 3000);
    }
  };

  window.provideData = updateInputData;

  const columns = [
    {
      name: 'Name',
      options: { filter: false },
    },
    {
      name: 'User Name',
      options: { filter: false, searchable: false },
    },
    {
      name: 'Start Date',
      options: {
        filter: false,
        searchable: false,
      },
    },
    {
      name: 'End Date',
      options: {
        filter: false,
        searchable: false,
      },
    },
    {
      name: 'Active',
      options: {
        filter: false,
        sort: false,
        searchable: false,
        customBodyRender: (value) => (
          <FormControlLabel
            control={<span className={`status ${value ? 'active' : 'inactive'}`} />}
            label={value ? localization.common.active : localization.common.inactive}
          />
        ),
      },
    },
    {
      name: 'Budget',
      options: { filter: false, searchable: false },
    },
    {
      name: 'Date',
      options: {
        display: false,
        filter: true,
        filterType: 'custom',
        filterList: [],
        customFilterListOptions: {
          render: (v) => {
            if (v[0] && v[1]) {
              return [`Start Date: ${v[0]}`, `End Date: ${v[1]}`];
            }
            if (v[0] && v[1]) {
              return `Start Date: ${v[0]}, End Date: ${v[1]}`;
            }
            if (v[0]) {
              return `Start Date: ${v[0]}`;
            }
            if (v[1]) {
              return `End Date: ${v[1]}`;
            }
            return false;
          },
          update: (filterList, filterPos, index) => {
            if (filterPos === 0) {
              filterList[index].splice(filterPos, 1, null);
            } else if (filterPos === 1) {
              filterList[index].splice(filterPos, 1);
            } else if (filterPos === -1) {
              filterList[index] = [];
            }
            return filterList;
          },
        },
        filterOptions: {
          names: [],
          logic(val, filters, row) {
            const startCheck = filters[0];
            const endCheck = filters[1];
            let startValid = false;
            let endValid = false;
            if (startCheck) {
              const checkDate = row[2];
              const startCom = moment(checkDate).isSameOrAfter(filters[0]);
              startValid = !startCom;
            }
            if (endCheck) {
              const checkDate = row[3];
              const endCom = moment(checkDate).isSameOrBefore(filters[1]);
              endValid = !endCom;
            }
            return startValid || endValid;
          },
          display: (filterList, onChange, index, column) => {
            const momentDate = moment();
            const minEndDate = filterList[index][0] || momentDate.format(dateFormat);
            const checkYear = momentDate.format('YY');
            const maxStartDate = filterList[index][1] || momentDate.add(100 - checkYear, 'years').format(dateFormat);

            return (
              <>
                <FormLabel>Date</FormLabel>
                <FormGroup row>
                  <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                    <DatePicker
                      autoOk
                      label="start date"
                      value={filterList[index][0] || null}
                      format={dateFormat}
                      clearable
                      maxDate={maxStartDate}
                      onChange={(event) => {
                        const updateVal = event ? event.format(dateFormat) : null;
                        if (updateVal) {
                          filterList[index][0] = updateVal;
                        } else {
                          filterList[index] = [];
                        }
                        onChange(filterList[index], index, column);
                      }}
                    />
                    <DatePicker
                      autoOk
                      label="end date"
                      value={filterList[index][1] || null}
                      format={dateFormat}
                      clearable
                      disabled={!filterList[index][0]}
                      minDate={minEndDate}
                      onChange={(event) => {
                        const updateVal = event ? event.format(dateFormat) : null;
                        if (!updateVal && !filterList[index][0]) {
                          filterList[index] = [];
                        } else {
                          filterList[index][1] = updateVal;
                        }
                        onChange(filterList[index], index, column);
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </FormGroup>
              </>
            );
          },
        },
        print: false,
        searchable: false,
      },
    },
  ];

  const options = {
    selectableRows: 'none',
    search: true,
    searchPlaceholder: localization.placeHolders.search,
    download: false,
    print: false,
    viewColumns: false,
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    tableBodyHeight: '400px',
    tableBodyMaxHeight: '',
    textLabels: {
      body: {
        noMatch: localization.common.noDataFound,
      }
    }
  };

  return <>
      {loader}
      <DataTable 
      title={localization.header.campaignHeading} 
      data={data} 
      columns={columns} 
      options={options} 
      />
    </>;
}

export default CampaignList;
