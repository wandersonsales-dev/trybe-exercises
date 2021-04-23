const uppercase = require('../ex01');

it('should to return the text converted to UPPERCASE', (done) => {
  uppercase('sample', (result) => {
    expect(result).toBe('SAMPLE');
    done();
  });
});
