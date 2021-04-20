const getUserName = require('../ex02');

it('should return the users information', async () => {
  expect.assertions(1);
  const response = await getUserName(4);
  expect(response).toEqual('Mark');
});
