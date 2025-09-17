const path = require('path');
const express = require('express');
const config = require('../config');


const app = express();
app.listen(config.app.port);

app.get('/', (req, res) => {
    res.send('Server NodeJS com JWT 🚀🚀🚀');
});