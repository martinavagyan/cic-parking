import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {CarOwner} from "./car-owner";

@Injectable()
export class ApiRequestsService {

  private tempCarOwnerObj: CarOwner[] = [
    {
      name: "Nick",
      plateNumber: "SZ-VB-21",
      contact: [
        {
          name: "whatsapp",
          info: "06343434"
        }
      ],
    },
    {
      name: "Martin",
      plateNumber: "MU-VB-56",
      contact: [
        {
          name: "whatsapp",
          info: "06777777"
        }
      ],
    },
    {
      name: "Vass",
      plateNumber: "MK-VB-13",
      contact: [
        {
          name: "whatsapp",
          info: "06777777"
        }
      ],
    },
    {
      name: "Anna",
      plateNumber: "KP-VB-13",
      contact: [
        {
          name: "whatsapp",
          info: "06777777"
        }
      ],
    },
    {
      name: "Tom",
      plateNumber: "TO-VB-13",
      contact: [
        {
          name: "whatsapp",
          info: "06777777"
        }
      ],
    },
    {
      name: "Mike",
      plateNumber: "OP-67-13",
      contact: [
        {
          name: "whatsapp",
          info: "06777777"
        }
      ],
    },
  ];

  constructor() {
  }

  getCarOwners(): Observable<any> {
    return new Observable(observer => {
      observer.next(this.tempCarOwnerObj);
      observer.complete();
    });
  }

}
