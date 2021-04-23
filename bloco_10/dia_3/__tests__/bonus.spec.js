const fetch = require('../bonus');

describe('BÔNUS', () => {
  const api = jest.spyOn(fetch, 'fetchJoke');

  const data = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  it('Verifica chamada da API', async () => {
    api.mockResolvedValue(data);

    api();
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api()).resolves.toStrictEqual({
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    });
    expect(api).toHaveBeenCalledTimes(2);
  });
});
