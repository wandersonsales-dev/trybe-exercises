const fetch = require('../ex06');

describe('Questão 06', () => {
  const api = jest.spyOn(fetch, 'fetchAPI');
  afterEach(api.mockReset);

  it('Em caso de sucesso, a função deve retornar \'request sucess\'', async () => {
    api.mockResolvedValue('request sucess');

    api();
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledTimes(1);
    expect(api()).resolves.toBe('request sucess');
    expect(api).toHaveBeenCalledTimes(2);
  });

  it('Em caso de falha, a função deve retornar \'request failed\'', async () => {
    api.mockRejectedValue('request failed');

    expect(api).toHaveBeenCalledTimes(0);
    expect(api()).rejects.toBe('request failed');
    expect(api).toHaveBeenCalledTimes(1);
  });
});
