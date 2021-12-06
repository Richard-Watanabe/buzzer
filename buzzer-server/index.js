const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

// Middleware:
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));