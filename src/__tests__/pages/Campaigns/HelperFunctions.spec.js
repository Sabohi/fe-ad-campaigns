import * as _ from '@/pages/Campaigns/helperFunctions';
import { initalCampaignData } from '@/pages/Campaigns/initalCampaignData';
import localization from '@/utils/localization';
import { users } from './HelperFunctionsData';
// import localization from '@/utils/localization';

describe('Testing prepareData function', () => {
  let receivedData = new Map();
  let userList = [];
  it('should return blank array', () => {
    expect(_.prepareData(receivedData, userList)).toStrictEqual([]);
  });
  it('should return blank array', () => {
    userList = users;
    expect(_.prepareData(receivedData, userList)).toStrictEqual([]);
  });
  it('should return data in requiured format with user name as Unknown User', () => {
    userList = [];
    receivedData = initalCampaignData;
    const unKnown = localization.common.unknownUser;
    const expectedData = [
      ['Divavu', unKnown, '2022-01-19', '2022-04-30', true, '88.38K USD'],
      ['Jaxspan', unKnown, '2017-11-21', '2018-02-21', false, '608.72K USD'],
      ['Trilith', unKnown, '2017-08-25', '2017-11-30', false, '179.84K USD'],
      ['Layo', unKnown, '2017-11-28', '2018-03-10', false, '837.85K USD'],
      ['Blogtag', unKnown, '2017-06-27', '2018-01-15', false, '109.08K USD'],
      ['Rhyzio', unKnown, '2017-10-13', '2018-01-25', false, '272.55K USD'],
      ['Zoomcast', unKnown, '2017-09-06', '2017-11-10', false, '301.92K USD'],
      ['Ane', unKnown, '2022-02-05', '2022-03-05', false, '5.10M USD'],
      ['Clause', unKnown, '2020-03-05', '2020-10-07', false, '10.01M USD'],
      ['Hamilton', unKnown, '2021-07-05', '2021-10-02', false, '50.01M USD'],
    ];
    expect(_.prepareData(receivedData, userList)).toStrictEqual(expectedData);
  });

  it('should return data in requiured format omiting campaigns having start date greater than end date and showing status equals to true when current date is inside the start-end date range', () => {
    userList = users;
    receivedData = initalCampaignData;
    const expectedData = [
      ['Divavu', 'Ervin Howell', '2022-01-19', '2022-04-30', true, '88.38K USD'],
      ['Jaxspan', 'Mrs. Dennis Schulist', '2017-11-21', '2018-02-21', false, '608.72K USD'],
      ['Trilith', 'Leanne Graham', '2017-08-25', '2017-11-30', false, '179.84K USD'],
      ['Layo', 'Glenna Reichert', '2017-11-28', '2018-03-10', false, '837.85K USD'],
      ['Blogtag', 'Ervin Howell', '2017-06-27', '2018-01-15', false, '109.08K USD'],
      ['Rhyzio', 'Patricia Lebsack', '2017-10-13', '2018-01-25', false, '272.55K USD'],
      ['Zoomcast', 'Nicholas Runolfsdottir V', '2017-09-06', '2017-11-10', false, '301.92K USD'],
      ['Ane', 'Chelsey Dietrich', '2022-02-05', '2022-03-05', false, '5.10M USD'],
      ['Clause', 'Clementina DuBuque', '2020-03-05', '2020-10-07', false, '10.01M USD'],
      ['Hamilton', 'Glenna Reichert', '2021-07-05', '2021-10-02', false, '50.01M USD'],
    ];
    expect(_.prepareData(receivedData, userList)).toStrictEqual(expectedData);
  });
});
