import localization from '@/utils/localization';
import { convertToICS } from '@/utils/commonFunctions/CommonFunctions';
import moment from 'moment';
import { GLOBALCONSTANTS } from '@/utils/GlobalConstants';

export const prepareData = (receivedData, userList) => {
  const data = [...receivedData.values()];
  const dateFormat = GLOBALCONSTANTS.DATE_FORMAT;
  console.warn = jest.fn();
  // Filter out data which contains startDate less than end date but rws with blank start or end will be shown.
  const dataFilter = data.length
    ? data.filter((item) => {
        let ret = typeof item?.id === 'number';
        if (item?.startDate && item.endDate) {
          ret = moment(item.startDate).isSameOrBefore(item.endDate);
        }
        return ret;
      })
    : [];
  const resultData = dataFilter.length
    ? dataFilter.map((item) => {
        let userName = localization.common.unknownUser;
        if (item?.userId) {
          const findItem = userList.findIndex((users) => users.id === item.userId);
          if (findItem !== -1) {
            userName = userList[findItem].name;
          }
        }
        const startDate = moment(item.startDate).format(dateFormat);
        const endDate = moment(item.endDate).format(dateFormat);

        // For those campaigns whose start or end is not available, status is shown as inactive
        const status = moment().isBetween(startDate, endDate);

        return [item.name, userName, startDate || localization.common.na, endDate || localization.common.na, status, convertToICS(item.Budget)];
      })
    : [];
  return resultData;
};
