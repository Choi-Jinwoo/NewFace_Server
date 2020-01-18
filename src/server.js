require('./models');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./api');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '../public')));
app.use(api);

app.listen(8080, () => {
  console.log(`Server is running at PORT 8080`);
});
