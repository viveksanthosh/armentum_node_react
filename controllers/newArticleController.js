const db = require('../database/mongodb'),
    promisify = require("es6-promisify");

module.exports = {
    getAllNewsArticles: () => new Promise((resolve, reject) => {
        const collection = db.getInstance().collection('newsArticles'),
            find = collection.find().toArray((err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data)
                }
            });
    })
}