const routes = require('./routes');

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

routes(app);