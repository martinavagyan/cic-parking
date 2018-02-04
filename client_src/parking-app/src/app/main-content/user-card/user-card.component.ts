import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarOwnerApi} from "../../shared/sdk/services/custom/CarOwner";
import {Location} from '@angular/common';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public carOwner: any;

  constructor(private activatedRoute: ActivatedRoute, private carOwnerApi: CarOwnerApi, private location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let carOwnerPlateNumber = params['plateNumber'];
      this.carOwnerApi.find({where: {plateNumber: carOwnerPlateNumber}}).subscribe(response => {
        this.carOwner = response[0];
        console.log(this.carOwner);
      });
    });
  }

  backClicked() {
    this.location.back();
  }

}
