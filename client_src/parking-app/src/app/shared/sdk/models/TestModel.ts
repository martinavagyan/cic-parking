/* tslint:disable */

declare var Object: any;
export interface TestModelInterface {
  "Name": string;
  "id"?: any;
}

export class TestModel implements TestModelInterface {
  "Name": string;
  "id": any;
  constructor(data?: TestModelInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TestModel`.
   */
  public static getModelName() {
    return "TestModel";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TestModel for dynamic purposes.
  **/
  public static factory(data: TestModelInterface): TestModel{
    return new TestModel(data);
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
      name: 'TestModel',
      plural: 'TestModels',
      path: 'TestModels',
      idName: 'id',
      properties: {
        "Name": {
          name: 'Name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
