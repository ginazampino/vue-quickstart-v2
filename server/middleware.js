const express = require('express');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const path = require('path');

module.exports = (app) => {
    const dist = path.resolve(__dirname, '../dist');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    require('./routes')(app);

    app.use(history());
    app.use(express.static(dist));
};