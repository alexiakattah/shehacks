const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: 'Api alterações',
  });
});

app.listen(3333, () => {
  console.log('Server is running');
});
