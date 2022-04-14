import localization from '@/utils/localization';

export const userMapper = (response) =>
  response.length > 0
    ? response.map((res) => ({
        id: res?.id,
        name: res?.name || localization.common.unknownUser,
      }))
    : [];
