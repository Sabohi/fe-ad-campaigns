import { GLOBALCONSTANTS } from '@/utils/GlobalConstants';
import { getUrl } from '@/utils/commonFunctions/CommonFunctions';
import { getAPIData } from '@/utils/webServiceHandler';
import { userMapper } from './api-mapper/userMapper';

export const fetchUsersInfo = async () => {
  try {
    const { getUsers } = GLOBALCONSTANTS.URLS;
    const url = getUrl(getUsers);
    const data = await getAPIData(url);
    const result = userMapper(data);
    return result;
  } catch (error) {
    return { error };
  }
};
