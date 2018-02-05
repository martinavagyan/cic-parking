/**
 * When the file is run all the database is wiped and built again.
 */
let app = require( '../server');
let db = app.datasources.db;
let testData = require('../../testData');
let testDataTablesMap = testData.testDataToModelsMap;
let modelClassName;
let model;
for (let testDataTablesMapsKey in testDataTablesMap) {
  modelClassName = testDataTablesMap[testDataTablesMapsKey];
  // check for undefined keys
  model = app.models[modelClassName];
  db.automigrate((err) => {
    if (err) throw err;
    let testDataOfModel = testData[testDataTablesMapsKey];
    createTestDataOfModel(testDataOfModel, model, db);
  });
}

function createTestDataOfModel(testDataOfModel, model, database) {
  let numberOfEntriesOfModelTestData = testDataOfModel.length;
  testDataOfModel.forEach((modelTestDataEntry) => {
    createModelInstance(modelTestDataEntry, numberOfEntriesOfModelTestData, database, model)
  });
}

function createModelInstance(modelTestDataEntry, disconnectDatabaseCounter, database, model) {
  model.create(modelTestDataEntry, (err, createdModelInstance) => {
    if (err) throw err;
    console.log('Created:', createdModelInstance);
    disconnectDatabaseCounter--;
    if (disconnectDatabaseCounter === 0)
      database.disconnect();
  });
}



