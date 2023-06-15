const cap = require('./capitalize');

let example = 'example';
let sol = 'Example';
test('example expected to be Example', () => {
    let result = cap(example);
    expect(result).toBe(sol);
  });
