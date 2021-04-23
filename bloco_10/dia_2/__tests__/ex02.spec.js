const getUserName = require('../ex02');

it('should return the users information', () => {
  expect.assertions(1);
  return getUserName(4).then((data) => expect(data).toBe('Mark'));
});

it('should return a error message', () => {
  const id = 8;
  expect.assertions(1);
  return getUserName(id).catch((data) => expect(data).toEqual({ error: `User with ${id} not found.` }));
});
