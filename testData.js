/**
 * Provide test data for each of the models that were declared.
 * For every class model (i.e. CarOwner), an array of class model instances should
 * be provided. Also they have to be mapped in testDataToModelsMap, which maps the
 * test data of each model with the name of the corresponding class model, and finally
 * exported.
 */

//CarOwner test data.
let carOwners = [
  {
    "plateNumber": "MO-243-AKK",
    "name": "Martin",
    "surname": "Avagyan",
    "contact": [
      {
        "name": "email",
        "value": "martinavagyan@gmail.com",
        "icon": "envelope"
      },
      {
        "name": "whatsapp",
        "value": "+3169098736",
        "icon": "whatsapp"
      },
      {
        "name": "phone",
        "value": "+3169098736",
        "icon": "phone"
      }
    ],
    "email": "martinavagyan@gmail.com",
    "emailVerified": true,
    "password": "1234"
  },
  {
    "plateNumber": "MK-123-PQ",
    "name": "Vass",
    "surname": "Kost",
    "contact": [
      {
        "name": "email",
        "value": "vass@gmail.com",
        "icon": "envelope"
      },
      {
        "name": "whatsapp",
        "value": "+3169098736",
        "icon": "whatsapp"
      },
      {
        "name": "phone",
        "value": "+3169098736",
        "icon": "phone"
      }
    ],
    "email": "vass@gmail.com",
    "emailVerified": true,
    "password": "1234"
  },
  {
  "plateNumber": "PQ-123-PQQ",
  "name": "Nik",
  "surname": "Po",
  "contact": [
    {
      "name": "email",
      "value": "nik@gmail.com",
      "icon": "envelope"
    },
    {
      "name": "whatsapp",
      "value": "+3169098736",
      "icon": "whatsapp"
    },
    {
      "name": "phone",
      "value": "+3169098736",
      "icon": "phone"
    }
  ],
  "email": "nik@gmail.com",
  "emailVerified": true,
  "password": "1234"
  }
]

// Object that maps test data of each model with the name of the corresponding class model.
let testDataToModelsMap = {carOwners : "CarOwner"};

module.exports = {carOwners,testDataToModelsMap}
