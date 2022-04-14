import * as _ from '@/utils/commonFunctions/CommonFunctions';

describe('Testing the common functions', () => {
  describe('Testing checkEmpty function', () => {
    it('should return true when null or undefined', () => {
      expect(_.checkEmpty(undefined)).toBe(true);
      expect(_.checkEmpty(null)).toBe(true);
    });

    it('should return false for number > 0', () => {
      expect(_.checkEmpty(1)).toBe(false);
      expect(_.checkEmpty('5')).toBe(false);
    });

    it('should return true for number <= 0', () => {
      expect(_.checkEmpty(-1)).toBe(true);
      expect(_.checkEmpty(0)).toBe(true);
      expect(_.checkEmpty('0')).toBe(true);
    });

    it('should return true for empty object or array', () => {
      expect(_.checkEmpty([])).toBe(true);
      expect(_.checkEmpty({})).toBe(true);
    });

    it('should return false for not empty object or array', () => {
      expect(_.checkEmpty([1, 2, 3, 4, 5])).toBe(false);
      expect(_.checkEmpty({ a: 1, b: 2, c: '123' })).toBe(false);
    });
  });

  describe('Testing getUrl function', () => {
    it('should return an url with params apended', () => {
      const url = 'https://example.com/api/v1/getUser';
      const params = {
        userId: 1,
        name: 'ABC',
        gender: 'M',
      };
      expect(_.getUrl(url, params)).toBe('https://example.com/api/v1/getUser?userId=1&name=ABC&gender=M');
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
});
