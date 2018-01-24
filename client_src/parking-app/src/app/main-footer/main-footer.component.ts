import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogContentComponent} from "../dialog-content/dialog-content.component";

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent implements OnInit {

  public tempVar: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  contact() {
    const dialogRef = this.dialog.open(DialogContentComponent );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
