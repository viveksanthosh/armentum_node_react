const router = require('express').Router(),
    newsArticleController = require('../controllers/newArticleController');

router.get('/newsArticles/:type', (req, res) => {
    newsArticleController.getAllNewsArticles(req.params.type).then(data => {
        res.send(data);
    }).catch(err => {
        res.sendStatus(500).send('error');
    })
});

module.exports = router;