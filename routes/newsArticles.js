const router = require('express').Router(),
    newsArticleController = require('../controllers/newArticleController');

router.get('/newsArticles', (req, res) => {
    newsArticleController.getAllNewsArticles().then(data => {
        res.send(data);
    }).catch(err => {
        res.sendStatus(500).send('error');
    })
});

module.exports = router;