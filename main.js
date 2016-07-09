/**
 * Simple microservice example, only one servers running.
 * Ejemplo sencillo de microservicios, un servidor activo.
 * 
 *   
 * Add and multiply two given numbers - Suma y multiplica dos números dados.
 * 
 *
 * Try it in browser - Pruébalo en el navegador:
 * 	
 * 	http://localhost:3000/operations/sum?right=2&left=3
 * 	http://localhost:3000/operations/product?right=2&left=32
 * 
 */
var seneca = require("seneca")();
seneca.use('plugin'); // Refers to plugin.js file


// Using Express
var express = require('express');
var app = express();

// Seneca - Express integration
app.use( seneca.export('web') );

app.listen(3000);



// Using connect
/*
var connect = require('connect')
var connect_query = require('connect-query')
var body_parser = require('body-parser')

var app = connect()
app.use(connect_query())
app.use(body_parser.json())
app.use(seneca.export('web'))

app.listen(3000)
*/