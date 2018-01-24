import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-add-plate-number',
  templateUrl: './add-plate-number.component.html',
  styleUrls: ['./add-plate-number.component.css']
})
export class AddPlateNumberComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string = "Plate number added.", action: string = "Success!") {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {

  }

  testFunc(): void{
    console.log("I am clicked");
  }

}
