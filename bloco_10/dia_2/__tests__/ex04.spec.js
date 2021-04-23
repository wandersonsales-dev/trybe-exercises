const getRepos = require('../ex04');

describe('Questão 04', () => {
  it('checks if it contains the expected data ', async () => {
    const data = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(data).toContain('sd-01-week4-5-project-todo-list');
    expect(data).toContain('sd-01-week4-5-project-meme-generator');
  });
});
