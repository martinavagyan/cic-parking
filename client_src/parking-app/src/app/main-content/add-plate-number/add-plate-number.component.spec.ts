import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlateNumberComponent } from './add-plate-number.component';

describe('AddPlateNumberComponent', () => {
  let component: AddPlateNumberComponent;
  let fixture: ComponentFixture<AddPlateNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlateNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlateNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
