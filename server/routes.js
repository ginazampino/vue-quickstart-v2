const path = require('path');
const { resolve } = require('path');

module.exports = (app) => {
    const index = path.resolve(__dirname, '../dist/index.html');

    app.get('/', (req, res) => {
        res.sendFile(index);
    });
};