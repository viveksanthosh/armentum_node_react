const express = require('express'),
    isConnected = require('./database/mongodb').isConnected,
    newsArticleRoutes = require('./routes/newsArticles'),
    app = express();

app.use(newsArticleRoutes);

isConnected.then(() => {
    app.listen(3000, () => {
        console.log('server started');
    })
}).catch(err => {
    console.log('error while starting')
    console.log(err);
})
