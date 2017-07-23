const mongoose = require('mongoose');

mongoose.connect('mongodb://newsFeed:news123@ds035036.mlab.com:35036/vivek-test');

const db = mongoose.connection,

isConnected = new Promise((resolve, reject) => {
  db.on('error', reject('connection error'));
  db.once('open', function () {
   resolve();
  });
});

module.exports = {
  isConnected,
  db
}