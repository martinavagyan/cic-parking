import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {CarOwner} from '../../car-owner';
import {ApiRequestsService} from '../../api-requests.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myControl = new FormControl();

  carOwners: Array<CarOwner> = [];

  constructor(public apiRequestsService: ApiRequestsService) {
    apiRequestsService.getCarOwners().subscribe(response => this.carOwners = response);
  }

  filteredOptions: Observable<CarOwner[]>;

  @Output()
  onHostClicked = new EventEmitter<void>();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .startWith(null)
      .map(carOwner => carOwner && typeof carOwner === 'object' ? carOwner.plateNumber : carOwner)
      .map(name => name ? this.filter(name) : this.carOwners.slice());
  }

  hostClicked(host) {
    console.log(host);
    this.onHostClicked.emit(host);
  }

  filter(plateNumber: string): CarOwner[] {
    return this.carOwners.filter(host =>
      host.plateNumber.toLowerCase().indexOf(plateNumber.toLowerCase()) === 0);
  }

  displayFn(user: CarOwner): any {
    return user ? user.plateNumber : user;
  }

}
