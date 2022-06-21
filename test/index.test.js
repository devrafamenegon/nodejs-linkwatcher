const getFile = require('../index');

test('need to be a function', () => {
  expect(typeof getFile).toBe('function');
})