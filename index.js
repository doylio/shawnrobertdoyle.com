//Dependancies
const express = require('express')
const fs = require('fs')

const app = express()


app.use(express.static('Public'))

app.listen(3000, function (){
	console.log('Listening on port 3000...')
})