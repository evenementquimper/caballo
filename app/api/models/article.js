var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var ArticleSchema   = new Schema({
	zatopek: String,
	auteur: String,
	titre: String,
	contenu: String,
	image: String,
	created_at: String,
    updated_at: {type: Date, default: Date.now}
},
{
	collection: 'articles'
});
//created_at: {type: Date, default: Date.now},
module.exports = mongoose.model('article', ArticleSchema);