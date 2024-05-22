import express from 'express';

const app = express();
const port = 3000;
app.use(express.static("web-app"));

app.get('/', async(req, res) => {
    res.send('<h1>Hello World</h1>');
  });

app.listen(port, ()=> console.log(`Listening for requests on port ${port}`))