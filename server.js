var express = require('express');
var app = express();
const routes = require('./routes');

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

routes(app);