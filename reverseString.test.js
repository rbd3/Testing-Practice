const reverseString = require('./reverseString');

let example = 'diso';
let rever = 'osid';
test('example expected to be reversed', () => {
  let result = reverseString(example);
  expect(result).toBe(rever);
});
