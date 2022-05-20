const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/config');
const app = express();

app.listen(PORT || 3000, () => console.log('Runing in Port 3000'));

// ejs import
app.set('view engine', 'ejs');
app.set('views', 'views');

// path static config
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// import routes
app.use(require('./routes/index.routes'));
