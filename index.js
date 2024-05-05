const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('How are you doing-This is Ashish Testing a Web application on Azure CI-CD');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
