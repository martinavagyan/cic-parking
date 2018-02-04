import {Component, OnInit, Renderer} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { ChangeDetectorRef } from '@angular/core';
import {Location} from '@angular/common';



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
  /**
   * The following variable is a workaround for making angular update pipe arrays
   * while avoiding usage of impure pipes to increase the performance */
  private updateMaps: boolean = false;


  constructor(public snackBar: MatSnackBar,private ref: ChangeDetectorRef, private renderer: Renderer, private location: Location) {}

  openSnackBar(message: string = "Plate number added.", action: string = "Success!") {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
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

  public addContactField(value): void{
    this.moveContactOptionToContactList(value);
    this.updateTemplateMapsPipe();
  }

  private moveContactOptionToContactList(value:any){
    if(value.val.name !== 'Other') {
      this.contactOptions.delete(value.key);
      this.contactList.set(value.key, value.val);
    } else {
      let uniqueName = new Date().getTime();
      this.contactList.set(value.key + uniqueName, value.val);
    }
  }

  public deleteFromSelectedContacts(value: any){
    this.contactList.delete(value.key);
    if(value.val.name !== 'Other') {
      this.contactOptions.set(value.key, value.val);
    }
    this.updateTemplateMapsPipe();
    console.log(value);
  }

  private updateTemplateMapsPipe(){
    this.updateMaps = !this.updateMaps;
  }

  public changeInputIconToDelete(event: any, currentIcon: string, changeToDelete: boolean) {
      this.renderer.setElementClass(event.target,"fa-trash-o",changeToDelete);
      this.renderer.setElementClass(event.target,currentIcon,!changeToDelete);
  }

  public createUser(): void {

  }

  backClicked() {
    this.location.back();
  }

}
