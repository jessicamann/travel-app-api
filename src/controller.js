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

//todo: add validations to input somewhere??
exports.addAPlace = function(req, res, next) {
  const body = req.body;
  const name = '\'' + body.name + '\'';
  const location = '\'' + body.location + '\'';
  const description = '\'' + body.description + '\'';
  var insertQuery = 
    'INSERT INTO places (name, location, description) values (' + 
    name + ', ' + location + ', ' + description + ');';

  db.any(insertQuery)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Added a place'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

exports.deleteAPlace = function(req, res, next) {
  const id = req.body.id;
  const deleteQuery = 'DELETE FROM places WHERE id=' + id + ';'
  db.any(deleteQuery)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Deleted a place'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

