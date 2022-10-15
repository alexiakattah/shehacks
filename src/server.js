const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Api',
  });
});

app.listen(3333, () => {
  console.log('Server is running');
});
