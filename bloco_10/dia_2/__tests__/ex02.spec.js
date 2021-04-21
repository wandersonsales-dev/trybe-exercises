const getUserName = require('../ex02');

it('should return the users information', () => {
  expect.assertions(1);
  return expect(getUserName(4)).resolves.toBe('Mark');
});

it('should return a object contains a message error', () => {
  const id = 8;
  expect.assertions(1);
  return expect(getUserName(id)).rejects.toEqual({ error: `User with ${id} not found.` });
});
