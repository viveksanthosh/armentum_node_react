const mongodb = require('mongodb'),
  mongoClient = mongodb.MongoClient;

let db, isConnected = new Promise((resolve, reject) => {
  mongoClient.connect('mongodb://newsFeed:news123@ds035036.mlab.com:35036/vivek-test', (err, dbInstance) => {

    if (err) {
      reject(err);
    } else {
      console.log('connected');
      db = dbInstance;
      resolve();
    }
  })
});

module.exports = {
  isConnected,
  getInstance: ()=> db
}