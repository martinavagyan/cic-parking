import {Component, OnInit, Renderer} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {ChangeDetectorRef} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {CarOwnerApi} from "../../shared/sdk/services/custom/CarOwner";


@Component({
  selector: 'app-add-plate-number',
  templateUrl: './add-plate-number.component.html',
  styleUrls: ['./add-plate-number.component.css']
})
export class AddPlateNumberComponent implements OnInit {

  public infoTextPlateNumber: string = "You can add your or your colleague's plate number.";
  public infoTextEmail: string = "You will receive a token that will allow you to edit the entry.";
  public infoAddContactBtn: string = "Recommended to have more than one contact option.";


  public contactList: Map<string, any> = new Map<string, any>();
  public contactOptions: Map<string, any> = new Map<string, any>();

  public plateNumber: string;
  /**
   * The following variable is a workaround for making angular update pipe arrays
   * while avoiding usage of impure pipes to increase the performance */
  private updateMaps: boolean = false;


  constructor(private activatedRoute: ActivatedRoute,
              public snackBar: MatSnackBar,
              private ref: ChangeDetectorRef,
              private renderer: Renderer,
              private location: Location,
              private carOwnerApi: CarOwnerApi) {
  }

  openSnackBar(message: string = "Plate number added.", action: string = "Success!") {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.plateNumber = params['plateNumber'].toUpperCase();
    });


    this.contactOptions.set("Phone", {
      name: "Phone",
      icon: "phone",
      value: 0,
    }).set("Whatsapp", {
      name: "Whatsapp",
      icon: "whatsapp",
      value: 0,
    }).set("Slack", {
      name: "Slack",
      icon: "slack",
      value: 0,
    }).set("Telegram", {
      name: "Telegram",
      icon: "telegram",
      value: 0,
    }).set("Other", {
      name: "Other",
      icon: "address-book-o",
      value: 0,
    });
  }

  public addContactField(value): void {
    this.moveContactOptionToContactList(value);
    this.updateTemplateMapsPipe();
  }

  private moveContactOptionToContactList(value: any) {
    if (value.val.name !== 'Other') {
      this.contactOptions.delete(value.key);
      this.contactList.set(value.key, value.val);
    } else {
      let uniqueName = new Date().getTime();
      this.contactList.set(value.key + uniqueName, value.val);
    }
  }

  public deleteFromSelectedContacts(value: any) {
    this.contactList.delete(value.key);
    if (value.val.name !== 'Other') {
      this.contactOptions.set(value.key, value.val);
    }
    this.updateTemplateMapsPipe();
    console.log(value);
  }

  private updateTemplateMapsPipe() {
    this.updateMaps = !this.updateMaps;
  }

  public changeInputIconToDelete(event: any, currentIcon: string, changeToDelete: boolean) {
    this.renderer.setElementClass(event.target, "fa-trash-o", changeToDelete);
    this.renderer.setElementClass(event.target, currentIcon, !changeToDelete);
  }

  public createUser(): void {
    let newCarOwner = this.getFormUserData();

    this.carOwnerApi.create(newCarOwner).subscribe(response => {
      console.log(response);
    });
    this.openSnackBar();
  }

  private getFormUserData(): object {
    return {
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
    };
  }

  public goBack() {
    this.location.back();
  }

}
