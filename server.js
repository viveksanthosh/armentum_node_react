const express = require('express'),
    isConnected = require('./mongodb').isConnected;
app = express();

isConnected.then(() => {
    app.listen(3000, () => {
        console.log('server started');
    })
}).catch(err => {
    console.log(err);
})
