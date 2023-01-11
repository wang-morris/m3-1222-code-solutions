const express = require('express');
const path = require('path');
const app = express();

const dirPath = path.join(__dirname, 'public');
console.log(dirPath);

const staticFile = express.static(dirPath);

app.use(staticFile);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000');
});
