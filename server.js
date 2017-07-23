const express = require('express'),
    isConnected = require('./database/mongodb').isConnected,
    newsArticleRoutes = require('./routes/newsArticles'),
    app = express();

app.use(newsArticleRoutes);
app.use(express.static('/', 'ui/public'))

isConnected.then(() => {
    app.listen(3001, () => {
        console.log('server started');
    })
}).catch(err => {
    console.log('error while starting')
    console.log(err);
})
