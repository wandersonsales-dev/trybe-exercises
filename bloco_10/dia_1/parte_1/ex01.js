const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parâmetros devem ser do tipo number');
  }
  return a + b;
};

module.exports = sum;
