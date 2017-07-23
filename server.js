const express = require('express'),
    isConnected = require('./database/mongodb').isConnected,
    newsArticleRoutes = require('./routes/newsArticles'),
    app = express();


app.use('/', express.static('ui/build'));
app.use(newsArticleRoutes);

isConnected.then(() => {
    app.listen(3001, () => {
        console.log('server started');
    })
}).catch(err => {
    console.log('error while starting')
    console.log(err);
})
