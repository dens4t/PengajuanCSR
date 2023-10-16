const express = require('express');

const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {
    pagename : "index",
    title : "Halooo"
  });
});
app.get('/pengajuan', (req, res) => {
  res.render('pengajuan', {
    pagename : "pengajuan",
    title : "Halooo"
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
