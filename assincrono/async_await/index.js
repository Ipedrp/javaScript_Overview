// Inclua o axios se necessário, caso ainda não tenha instalado
// Para instalar o axios, execute: npm install axios
const axios = require('axios');

// 1. Usando fetch com async/await
async function fetchWithFetch() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    const data = await response.json();
    console.log('Dados com fetch:', data);
  } catch (error) {
    console.error('Erro ao fazer a requisição com fetch:', error);
  }
}

// 2. Usando axios com async/await
async function fetchWithAxios() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('Dados com axios:', response.data);
  } catch (error) {
    console.error('Erro ao fazer a requisição com axios:', error);
  }
}

// 3. Enviando dados com POST usando fetch
async function postDataWithFetch() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    });
    if (!response.ok) {
      throw new Error('Erro ao enviar dados com fetch');
    }
    const data = await response.json();
    console.log('Dados recebidos ao enviar com fetch:', data);
  } catch (error) {
    console.error('Erro ao enviar dados com fetch:', error);
  }
}

// 4. Enviando dados com POST usando axios
async function postDataWithAxios() {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
    console.log('Dados recebidos ao enviar com axios:', response.data);
  } catch (error) {
    console.error('Erro ao enviar dados com axios:', error);
  }
}

// 5. Manipulando múltiplas requisições com async/await
async function fetchMultipleData() {
  try {
    const [posts, users] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
    ]);
    console.log('Posts:', posts);
    console.log('Users:', users);
  } catch (error) {
    console.error('Erro nas requisições múltiplas:', error);
  }
}

// 6. Usando try/catch para tratar erros
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    const data = await response.json();
    console.log('Dados com fetch:', data);
  } catch (error) {
    console.error('Erro ao fazer a requisição com fetch:', error);
  }
}

// Chama as funções para testar
fetchWithFetch();
fetchWithAxios();
postDataWithFetch();
postDataWithAxios();
fetchMultipleData();
fetchDataWithErrorHandling();
