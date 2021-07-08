const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const cookieParser = require('cookie-parser')

const app = express();

const CustomerRoutes = require('./routes/index');
const { urlencoded } = require('express');

//settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



//middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(myconnection(mysql, {
    host: 'boygmbvhiiblbetqh3qh-mysql.services.clever-cloud.com',
    user: 'ujvzl4yu5tnddevv',
    password: 'Dg5ofJbAzCkESvfKeABM',
    port: 3306,
    database: 'boygmbvhiiblbetqh3qh'
}, 'single'));


app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', CustomerRoutes);


//Stactis files
app.use(express.static(path.join(__dirname, 'public')));

//Empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});




module.exports = app;