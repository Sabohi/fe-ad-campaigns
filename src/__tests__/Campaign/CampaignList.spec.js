import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { store } from '@/store';
import Campaigns from '@/pages/Campaigns';
import { campaignData } from './CampaignTestData';

beforeEach(cleanup);

describe('ad campaign module testing without data', () => {
  let wrapper;

  beforeEach(() => {
    cleanup();
    wrapper = render(
      <Provider store={store}>
        <StaticRouter>
          <Campaigns dispatch={store.dispatch} {...campaignData.emptyData} />
        </StaticRouter>
      </Provider>,
    );
  });
  it.skip('it checks "No Data Found" case', () => {
    expect(wrapper.getByText(/no data/i).textContent).toBe("No Data Found");
  });
});
