import { numberWithComma } from '../';

describe('numberWithComma', () => {
  it('숫자 콤마 단위로 변환', () => {
    expect(numberWithComma(1000)).toBe('1,000');
    expect(numberWithComma('999999')).toBe('999,999');
    expect(numberWithComma(123456789)).toBe('123,456,789');
  });
});
