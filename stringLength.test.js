const stringLength = require('./stringLength');

let example = 'this is an examp';
test('example expected to be at most 10', () => {
  expect(() => {
    let result = stringLength(example);
    expect(result).toBeLessThanOrEqual(10);
  }).toThrow(/String cannot be longer than 10 characters./);
});
