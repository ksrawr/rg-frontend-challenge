const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile('./public/index.html', {
    root: `${__dirname}`
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});