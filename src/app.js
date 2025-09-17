const path = require('path');
require('dotenv').config({ 
    path: path.resolve(__dirname, '../config/.env')
});
const express = require('express');

console.log(process.env);