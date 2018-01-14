/* tslint:disable */

declare var Object: any;
export interface CarOwnerInterface {
  "plateNumber": string;
  "name": string;
  "surname": string;
  "contact"?: any;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
}

export class CarOwner implements CarOwnerInterface {
  "plateNumber": string;
  "name": string;
  "surname": string;
  "contact": any;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  constructor(data?: CarOwnerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CarOwner`.
   */
  public static getModelName() {
    return "CarOwner";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CarOwner for dynamic purposes.
  **/
  public static factory(data: CarOwnerInterface): CarOwner{
    return new CarOwner(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'CarOwner',
      plural: 'CarOwners',
      path: 'CarOwners',
      idName: 'id',
      properties: {
        "plateNumber": {
          name: 'plateNumber',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "surname": {
          name: 'surname',
          type: 'string'
        },
        "contact": {
          name: 'contact',
          type: 'any'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
      }
    }
  }
}
