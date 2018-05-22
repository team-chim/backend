const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')
const compression = require('compression');
const lowercasePaths = require('express-lowercase-paths');
const multer = require('multer');

// express static options
var options = {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['htm', 'html'],
    index: 'index.html',
    lastModified: true,
    maxAge: '1d',
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now());
      res.header('Cache-Control', 'public, max-age=1d');
    }
  };

// Routes
const apiv2 = require('./routes/api.v2');

// Application
const app = express();

// Config
const corsConfig = require('./config/cors')

// Logger
app.use(morgan('dev'));

app.use(helmet());
app.use(cors(corsConfig));

// app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Parse form-data
const upload = multer();
app.use(upload.array());

// Convert to lowercase
app.use(lowercasePaths())
// Static Dir

app.use(express.static('public'))

const __htmldir = path.join(__dirname, 'public', 'html');

app.get('/', (req, res) => {
    res.sendFile(__htmldir + "/index.html");
})


app.use('/v1/*', (req, res) => {
    res.send("API v1 is not supported");
});
app.use('/v2', apiv2);

module.exports = app;