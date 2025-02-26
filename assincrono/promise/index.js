// Exemplo de Promises com Fetch
// Exemplo simples de Promise com Fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log('Fetch - Promise Simples:', data))
  .catch(error => console.error('Erro no Fetch:', error))
  .finally(() => console.log('Requisição Fetch finalizada'));

// Exemplo de Promise.all com Fetch
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

Promise.all(urls.map(url => fetch(url).then(res => res.json())))
  .then(results => console.log('Fetch - Promise.all:', results))
  .catch(error => console.error('Erro no Promise.all com Fetch:', error))
  .finally(() => console.log('Requisição Fetch com Promise.all finalizada'));

// Exemplo de Promises com Axios
const axios = require('axios');

// Exemplo simples de Promise com Axios
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log('Axios - Promise Simples:', response.data))
  .catch(error => console.error('Erro no Axios:', error))
  .finally(() => console.log('Requisição Axios finalizada'));

// Exemplo de Promise.all com Axios
const requests = [
  axios.get('https://jsonplaceholder.typicode.com/posts/1'),
  axios.get('https://jsonplaceholder.typicode.com/posts/2'),
  axios.get('https://jsonplaceholder.typicode.com/posts/3')
];

Promise.all(requests)
  .then(responses => responses.map(response => response.data))
  .then(data => console.log('Axios - Promise.all:', data))
  .catch(error => console.error('Erro no Promise.all com Axios:', error))
  .finally(() => console.log('Requisição Axios com Promise.all finalizada'));
