import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './styles';

const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true,
});

function DataTable({ title, data, columns, options }) {
  console.log('========');
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <MUIDataTable title={title} data={data} columns={columns} options={options} />
      </ThemeProvider>
    </CacheProvider>
  );
}

DataTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
  columns: PropTypes.oneOfType([PropTypes.array]).isRequired,
  options: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DataTable;
