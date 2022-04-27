import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import localization from '@/utils/localization';

export const columns = [
  {
    name: localization.tableColumns.name,
  },
  {
    name: localization.tableColumns.userName,
  },
  {
    name: localization.tableColumns.startDate,
  },
  {
    name: localization.tableColumns.endDate,
  },
  {
    name: localization.tableColumns.status,
    options: {
      sort: false,
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
];

export const options = {
  pagination: false,
  selectableRows: 'none',
  search: false,
  searchPlaceholder: localization.placeHolders.search,
  download: false,
  print: false,
  viewColumns: false,
  filter: false,
  responsive: 'vertical',
  tableBodyHeight: 'calc(100vh - 6.5rem)',
  tableBodyMaxHeight: 'calc(100vh - 6.5rem)',
  textLabels: {
    body: {
      noMatch: localization.common.noDataFound,
    },
  },
};
