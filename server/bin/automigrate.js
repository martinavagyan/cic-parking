let path = require('path');
let app = require( '../server');
let db = app.datasources.db;
let testData = require('../../testData');
db.automigrate((err) => {
  if (err) throw err;
  let carOwners = testData.carOwner;
  let count = carOwners.length;
  carOwners.forEach(function(carOwner) {
    app.models.CarOwner.create(carOwner, function(err, model) {
      if (err) throw err;
      console.log('Created:', model);
      count--;
      if (count === 0)
        db.disconnect();
    });
  });
});


