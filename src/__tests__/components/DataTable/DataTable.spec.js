import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { store } from '@/store';
import { shallow } from 'enzyme';
import DataTable from '@/components/DataTable';
import { dataTableData } from './DataTableData';

describe('Testing Datatable module mounting', () => {
  it('DataTable snapshot test', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <DataTable {...dataTableData.emptyData} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Datatble module testing', () => {
  let wrapper;
  beforeEach(() => {
    cleanup();
    wrapper = render(
      <Provider store={store}>
        <StaticRouter>
          <DataTable {...dataTableData.nonEmptyData} />
        </StaticRouter>
      </Provider>,
    );
  });
  it('it checks that correct number of rows are rendered', () => {
    expect(wrapper.getAllByTestId('campaign-row').length).toBe(7);
  });
});
