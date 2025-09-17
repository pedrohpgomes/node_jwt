const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') });
const express = require('express');

const app = express();
const app_port = process.env.APP_PORT;
app.listen(app_port);

app.get('/', (req, res) => {
    res.send('Server NodeJS com JWT 🚀🚀🚀');
});