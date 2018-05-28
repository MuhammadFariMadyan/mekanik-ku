const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/web');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport   = require('passport');
const exphbs     = require('express-handlebars');
const models = require('./models');

app.use(cookieParser('keyboard cat'));
// app.use(session({ cookie: { maxAge: 60000 }}));

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

// For EJS
app.set('views', __dirname+'/views/');
app.set('view engine','ejs');

//For Handlebars
// app.set('views', __dirname+'/views/');
// app.engine('hbs', exphbs({extname: '.hbs'}));
// app.set('view engine', '.hbs');

//body parser
app.use(bodyParser.urlencoded({
	extended: true
  }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));

// routes
app.use('/', router);

//load passport strategies
require('./config/passport/passport.js')(passport,models.User);

//Sync Database
models.sequelize.sync().then(function(){
  console.log('Database berhasil terhubung')
}).catch(function(err){
console.log(err,"Ada masalah dengan database!")
});

const port = process.env.PORT || 3500;

app.listen(port, function(err){
  if(!err)
  console.log(`Server starts on ${port}`); else console.log(err)

});