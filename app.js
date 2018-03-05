var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var MonsterDetail = require('./routes/MonsterDetail');
var EffectType = require('./routes/EffectType');
var Level = require('./routes/Level');
var MonsterType = require('./routes/MonsterType');
var AttriType = require('./routes/AttriType');
var TrapType = require('./routes/TrapType');
var StrippedType = require('./routes/StrippedType');
var Site = require('./routes/Site');
var ItemType = require('./routes/ItemType');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.engine('.html',require('ejs').__express);
// app.set('view engine','html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/MonsterDetail', MonsterDetail);
app.use('/EffectType', EffectType);
app.use('/Level', Level);
app.use('/MonsterType', MonsterType);
app.use('/AttriType', AttriType);
app.use('/TrapType', TrapType);
app.use('/StrippedType', StrippedType);
app.use('/Site', Site);
app.use('/ItemType', ItemType);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
