const express = require('express');
const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('public/index.html', {root: __dirname })
});

app.listen(5003, () => {
  console.log('Example app listening on http://localhost:5003/');
});
