var express = require('express');
var multer = require('multer');
var router = express.Router();

var Articledb = require('../models/article');

//router.use(express.static(__dirname + '/../public'));

router.get('/article', function(req, res) {
	Articledb.find(function(err, article) {
		if (err)
			res.send(err);

		//res.render('./public/');
		res.json(article);
	});
});

//add account
router.post('/article', function(req, res) {

console.log(req.body);
	var article = new Articledb(); // create a new instance of the Account model
	
	article.zatopek= req.body.zatopek;
	article.created_at= req.body.created_at;
	article.auteur= req.body.auteur;
	article.image= req.body.image;
	article.titre = req.body.titre; // set the Account userid (comes from the request)
	article.contenu = req.body.contenu;
	

	article.save(function(err) {
		if (err)
			res.send(err);

		res.json(201, article);
	});


});

// get the Article with that id
router.get('/article/:article_id', function(req, res) {
//console.log(req.params.article_id);
//if (req.params.article_id === undefined) return res.send(400,'account id empty');

		Articledb.findById(req.params.article_id, function(err, article) {
			if (err)
				res.send(err);
			res.json(article);
			//console.log('Edit: ', article);
		});

});

// update the account with this id
router.put('/article/:article_id', function(req, res) {

	if (req.params.article_id === undefined) return res.send(400,'account id empty');

	Articledb.findById(req.params.article_id, function(err, article) {

		if (err)
			res.send(err);
		article.zatopek= req.body.zatopek;
		article.created_at= req.body.created_at;
		article.auteur= req.body.auteur;
		article.image= req.body.image;
		article.titre = req.body.titre;
		article.contenu = req.body.contenu;
		article.save(function(err) {
			if (err)
				res.send(err);

			res.json(article);
		});

	});	
});

// delete the article with this id
router.delete('/article/:article_id', function(req, res) {

	Articledb.remove({
		_id: req.params.article_id
	}, function(err, article) {
		if (err)
			res.send(err);

		res.json({
			message: 'Successfully deleted'
		});
	});

});

/** API path that will upload the files */
// router.post('/article/upload', function(req, res) {
//     var storage = multer.diskStorage({ //multers disk storage settings
//         destination: function(req, file, cb) {
//             cb(null, 'public/uploads/')
//         },
//         filename: function(req, file, cb) {
//             var datetimestamp = Date.now();
//             cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
//             console.log('FILE ArticleCtrl: ', file);
//         }

//     });

//     var upload = multer({ //multer settings
//         storage: storage
//     }).single('file');

//     console.log("Chargement fichier...");

//     upload(req, res, function(err) {

//         if (err) {
//             console.log(err);
//             res.json({
//                 error_code: 1,
//                 err_desc: err
//             });
//             return;
//         }
//         media = req.file.filename;
//         console.log('SavedMedia:', media);
//         res.json({
//             error_code: 0,
//             err_desc: null
//         });


//     });

// });


module.exports = router