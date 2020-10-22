const express = require('express');
const app = express();

const config = require('./config');
const port = config.server.port;

require('./middleware')(app);

app.listen(port, () => {
    console.log('Now listening on port ' + port + '.');
});