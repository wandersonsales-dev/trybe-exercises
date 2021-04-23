const fetchAPI = () => new Promise((resolve) => {
  try {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        response.json().then((data) => resolve(data));
      });
  } catch (error) {
    throw new Error('Não foi possível obter os dados');
  }
});

module.exports = { fetchAPI };
