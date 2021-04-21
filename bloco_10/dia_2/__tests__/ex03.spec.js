const getUserName = require('../ex02');

it('should return the users information', async () => {
  expect.assertions(1);
  const data = await getUserName(4);
  expect(data).toEqual('Mark');
});

it('should return a error message', async () => {
  const id = 8;
  expect.assertions(1);
  try {
    await getUserName(id);
  } catch (error) {
    expect(error).toEqual({ error: `User with ${id} not found.` });
  }
});
