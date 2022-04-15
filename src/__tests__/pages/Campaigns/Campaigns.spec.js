import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { store } from '@/store';
import Campaigns from '@/pages/Campaigns';
import { shallow } from 'enzyme';
import localization from '@/utils/localization';

describe('Testing Campaign module mounting', () => {
  it('Campaigns snapshot test', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Campaigns />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Campaigns module testing', () => {
  let wrapper;
  beforeEach(() => {
    cleanup();
    wrapper = render(
      <Provider store={store}>
        <StaticRouter>
          <Campaigns />
        </StaticRouter>
      </Provider>,
    );
  });
  it('it checks "No Data Found" case', () => {
    expect(wrapper.getByText(/no data/i).textContent).toBe(localization.common.noDataFound);
  });
  it('it checks that table is in document', () => {
    expect(wrapper.getByLabelText('Table Toolbar')).toBeInTheDocument();
  });
  it('it checks that search bar is mounted', () => {
    expect(wrapper.getByTestId('Search-iconButton')).toBeInTheDocument();
  });
  it('it checks that filter table is mounted', () => {
    expect(wrapper.getByTestId('Filter Table-iconButton')).toBeInTheDocument();
  });
});
