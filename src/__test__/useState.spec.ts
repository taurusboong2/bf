import { useState } from '../';

const [count, setCount] = useState(0);

describe('useState', () => {
  test('the initial value should be 0.', () => {
    expect(count(0)).toBe(0);
  });

  test('after the set function is executed, the argument passed to the set function must be a value', () => {
    setCount(100);
    expect(count(0)).toBe(100);
  });
});
