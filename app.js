const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const pe = require('parse-error')
const cors = require('cors')
const mongoose = require('mongoose'); 
const v1 = require('./routes/v1')
const app = express()

const CONFIG = require('./config/config')

app.use(logger('dev'))

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))

// Log Env
console.log('Environment:', CONFIG.app)
// DATABASE
mongoose.connect('mongodb://'+CONFIG.users.host+'/'+CONFIG.users.database, function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

// CORS
app.use(cors())

app.use('/v1', v1)

app.use('/', function (req, res) {
    res.statusCode = 200// send the appropriate status code
    res.json({ status: 'success', message: 'Parcel Pending API', data: {} })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'dev' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app

// This is here to handle all the uncaught promise rejections
process.on('unhandledRejection', error => {
    console.error('Uncaught Error', pe(error))
})
