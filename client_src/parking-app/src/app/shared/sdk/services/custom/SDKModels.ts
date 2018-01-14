/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Employee } from '../../models/Employee';
import { CarOwner } from '../../models/CarOwner';
import { TestModel } from '../../models/TestModel';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Employee: Employee,
    CarOwner: CarOwner,
    TestModel: TestModel,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
