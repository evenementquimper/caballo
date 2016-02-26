var express = require('express')
  , router = express.Router()

router.use(express.static(__dirname + '/../public'))

router.use('/', require('./articleCtrl'))
router.use('/api/users', require('./userCtrl'));
router.use('/api/upload', require('./uploadCtrl'));

module.exports = router