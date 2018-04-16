const express = require('express');

var app = express();


app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page Not Found',
        name: "Todo App v1.0"
    });
})


app.listen(3000, () => {
    console.log("port is running");
})

module.exports.app = app;