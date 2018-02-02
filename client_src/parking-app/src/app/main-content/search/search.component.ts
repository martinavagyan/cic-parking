import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {CarOwner} from '../../car-owner';
import {ApiRequestsService} from '../../api-requests.service';
import {trigger, transition, style, animate, state} from '@angular/animations'
import {CarOwnerApi} from "../../shared/sdk/services/custom/CarOwner";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public myControl: FormControl = new FormControl();
  public carOwners: Array<CarOwner> = [];
  public filteredOptions: Observable<CarOwner[]>;


  constructor(public apiRequestsService: ApiRequestsService, public carOwnerApi:CarOwnerApi) {
    //apiRequestsService.getCarOwners().subscribe(response => this.carOwners = response);
    carOwnerApi.find({where: "plateNumber"}).subscribe(response => this.carOwners = response);
  }


  @Output()
  onHostClicked = new EventEmitter<void>();

  ngOnInit() {
    this.carOwnerApi.find().subscribe(
      (response) => {
        this.carOwners = response;
        console.log('carOnwer', this.carOwners );
        this.filteredOptions = this.myControl.valueChanges
          .startWith(null)
          .map(carOwner => carOwner && typeof carOwner === 'object' ? carOwner.plateNumber : carOwner)
          .map(name => name ? this.filter(name) : this.carOwners.slice());
      });
  }

  public plateNumberClicked(host): void {
    console.log(host);
    //this.onHostClicked.emit(host);
    console.log(this.filteredOptions);
  }

  public testfunc(array): void {
    console.log(array);
  }

  public filter(plateNumber: string): CarOwner[] {
    return this.carOwners.filter(host =>
      host.plateNumber.toLowerCase().indexOf(plateNumber.toLowerCase()) === 0);
  }

  public displayFn(user: CarOwner): any {
    return user ? user.plateNumber : user;
  }

}
