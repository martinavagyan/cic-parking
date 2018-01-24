import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent implements OnInit {

  public tempVar: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
}
