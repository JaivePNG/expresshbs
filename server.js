var express = require('express')
// express is a web application framework for Node.js
//require is short for module.require
var hbs = require('express-handlebars')
//install by $ npm install express-handlebars
//this is the handlbars view engine
var path = require('path')
//The default operation of the path module varies based on the operating system on which a Node.js application is running. Specifically, when running on a Windows operating system, the path module will assume that Windows-style paths are being used. or mac/linux etc.


var data = require('./data')
// node.js require is a simple way of loading a module you exported in your hbs file. So this loads the data

var app = express()
//The app object conventionally denotes the Express application. Create it by calling the top-level express() function exported by the Express module:

app.engine('hbs', hbs())
//this registers the template engine that will be returned. This is the middleware - engine that does something to what we are calling and returning it.
app.set('view engine', 'hbs')
//assigns a setting name property to value -- is view engine, hbs
app.set('views', path.join(__dirname, 'views'))
//it takes two directories and it joins them
//dir takes current directory

//app.get requests data from a specified html resource
app.get('/', function (req, res) {
    res.render('index', data)
    //renders a view and sends the rendered view to the client.
})

app.get('/data/:id', function (req,res) {
  res.render('blogs', data.data[req.params.id])
  //renders a view through blogs.hbs and sends the rendered view to the client.
  //and then uses the key/value provided by data module exported (id:1 etc) to find the correct value.

})

app.listen(3001, function () {
  console.log('Listening on 3001')
  console.log(path.basename)
})
