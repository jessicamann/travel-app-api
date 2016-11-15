var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/places';
var db = pgp(connectionString);

exports.getAllPlaces = function(req, res, next) {
  db.any('select * from places')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL places'
          });
      })
      .catch(function (err) {
        return next(err);
      });
}