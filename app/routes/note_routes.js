"use strict";

const fs = require('fs');

module.exports = function(app, db) {
    app.get('/notes', (req, res) => {
        res.send('This is a note!');
    });

    app.get('/notes/big', (req, res) => {
        const src = fs.createReadStream('./big-file.json');
        src.pipe(res);
    });

    app.post('/notes', (req, res) => {
        console.log(req.body);
        res.send('Hello')
    });
};