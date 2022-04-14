import * as _ from '@/utils/commonFunctions/CommonFunctions';
import localization from '@/utils/localization';

describe('Testing the common functions', () => {

  describe('Testing getUrl function', () => {
    it('should return an url with params apended', () => {
      const url = 'https://jsonplaceholder.typicode.com/user';
      const params = {
        userId: 1,
        name: 'ABC',
      };
      expect(_.getUrl(url, params)).toBe('https://jsonplaceholder.typicode.com/user?userId=1&name=ABC');
    });
  });

  describe('Testing equalityChecker function', () => {
    let param1 = { a: 1 };
    let param2 = { b: 2 };
    it('should return true', () => {
      expect(!_.equalityChecker(param1, param2)).toBe(true);
    });
    it('should return true', () => {
      param1 = [1, 2, 3];
      param2 = [1, 2, 3];
      expect(_.equalityChecker(param1, param2)).toBe(true);
    });
    it('should return false', () => {
      param1 = [1, 2, 3, 4];
      param2 = [1, 2, 3];
      expect(_.equalityChecker(param1, param2)).toBe(false);
    });
  });

  describe('Testing convertToICS function', () => {
    let param = null;
    it('should return in NA', () => {
      param = null;
      expect(_.convertToICS(param)).toBe(localization.common.na);
    });
    it('should return in Billion USD', () => {
      param = 1560000000;
      expect(_.convertToICS(param)).toBe('1.56B USD');
    });
    it('should return in Million USD', () => {
      param = 1750000;
      expect(_.convertToICS(param)).toBe('1.75M USD');
    });
    it('should return thousand USD', () => {
      param = 56600;
      expect(_.convertToICS(param)).toBe('56.60K USD');
    });
  });


});
