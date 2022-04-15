import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import localization from '@/utils/localization';
import { GLOBALCONSTANTS } from '@/utils/GlobalConstants';

const dateFormat = GLOBALCONSTANTS.DATE_FORMAT;

export const columns = [
  {
    name: localization.tableColumns.name,
    options: { filter: false },
  },
  {
    name: localization.tableColumns.userName,
    options: { filter: false, searchable: false },
  },
  {
    name: localization.tableColumns.startDate,
    options: {
      filter: false,
      searchable: false,
    },
  },
  {
    name: localization.tableColumns.endDate,
    options: {
      filter: false,
      searchable: false,
    },
  },
  {
    name: localization.tableColumns.status,
    options: {
      filter: false,
      sort: false,
      searchable: false,
      customBodyRender: (value) => (
        <FormControlLabel
          control={<span className={`status ${value ? 'active' : 'inactive'}`} data-testid="campaign-row" />}
          label={value ? localization.common.active : localization.common.inactive}
        />
      ),
    },
  },
  {
    name: localization.tableColumns.budget,
    options: { filter: false, searchable: false },
  },
  {
    name: localization.tableColumns.dateShow,
    options: {
      display: false,
      filter: true,
      filterType: 'custom',
      filterList: [],
      customFilterListOptions: {
        render: (v) => {
          if (v[0] && v[1]) {
            return [`${localization.tableColumns.startDate}: ${v[0]}`, `${localization.tableColumns.endDate}: ${v[1]}`];
          }
          if (v[0]) {
            return `${localization.tableColumns.startDate}: ${v[0]}`;
          }
          if (v[1]) {
            return `${localization.tableColumns.endDate}: ${v[1]}`;
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
                    label={localization.tableColumns.startDate}
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
                    label={localization.tableColumns.endDate}
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

export const options = {
  selectableRows: 'none',
  search: true,
  searchPlaceholder: localization.placeHolders.search,
  download: false,
  print: false,
  viewColumns: false,
  filter: true,
  filterType: 'dropdown',
  responsive: 'vertical',
  tableBodyHeight: 'calc(100vh - 6.5rem)',
  tableBodyMaxHeight: 'calc(100vh - 6.5rem)',
  textLabels: {
    body: {
      noMatch: localization.common.noDataFound,
    },
  },
};
