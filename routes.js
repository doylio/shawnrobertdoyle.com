const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
	res.send('Here is the homepage')
})

router.get('/smartBrain', function(req, res) {
	res.send('Here is the SmartBrain App')
})

router.get('/sortingHat', function(req, res){
	res.send('Here is the Sorting Hat App')
})

module.exports = router