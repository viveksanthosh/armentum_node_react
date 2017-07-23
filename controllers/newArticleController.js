const db = require('../database/mongodb'),
    promisify = require("es6-promisify");

module.exports = {
    getAllNewsArticles: () => {
        const collection = db.getInstance().collection('newsArticles'),
        find = collection.find;
        return find();
    }
}