var mongoose = require('mongoose')

var db_url = process.env.DB_URL || 'mongodb://hammad:hammad@cluster0-shard-00-00-mxrsp.mongodb.net:27017,cluster0-shard-00-01-mxrsp.mongodb.net:27017,cluster0-shard-00-02-mxrsp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'

mongoose.connect(db_url, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });