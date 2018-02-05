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
    "plateNumber": "MO-243-AK",
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
  "plateNumber": "PQ-123-PQ",
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
  },

  {
    "plateNumber": "PQ-123-PQ",
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
  },

  {
    "plateNumber": "SO-123-PQ",
    "name": "Mick",
    "surname": "Pong",
    "contact": [
      {
        "name": "email",
        "value": "miko@gmail.com",
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
    "email": "miko@gmail.com",
    "emailVerified": true,
    "password": "1234"
  },
  {
    "plateNumber": "KO-U12-PQ",
    "name": "Karo",
    "surname": "Chan",
    "contact": [
      {
        "name": "email",
        "value": "karo@gmail.com",
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
    "email": "karo@gmail.com",
    "emailVerified": true,
    "password": "1234"
  },

  {
    "plateNumber": "CHI-22K-9I",
    "name": "Pinor",
    "surname": "Noir",
    "contact": [
      {
        "name": "email",
        "value": "pinor@gmail.com",
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
    "email": "pinor@gmail.com",
    "emailVerified": true,
    "password": "1234"
  },

  {
    "plateNumber": "LOL-78-II",
    "name": "Serob",
    "surname": "Ohio",
    "contact": [
      {
        "name": "email",
        "value": "serob@gmail.com",
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
    "email": "serob@gmail.com",
    "emailVerified": true,
    "password": "1234"
  },

  {
    "plateNumber": "JIJ-AM-ST",
    "name": "Stephan",
    "surname": "Kio",
    "contact": [
      {
        "name": "email",
        "value": "stephan@gmail.com",
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
    "email": "stephan@gmail.com",
    "emailVerified": true,
    "password": "1234"
  },

  {
    "plateNumber": "IO-1P-KO",
    "name": "Tom",
    "surname": "Chu",
    "contact": [
      {
        "name": "email",
        "value": "tom@gmail.com",
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
    "email": "tom@gmail.com",
    "emailVerified": true,
    "password": "1234"
  },
]

// Object that maps test data of each model with the name of the corresponding class model.
let testDataToModelsMap = {carOwners : "CarOwner"};

module.exports = {carOwners,testDataToModelsMap}
