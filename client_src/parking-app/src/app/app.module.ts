import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {MainFooterComponent} from './main-footer/main-footer.component';
import {MainContentComponent} from './main-content/main-content.component';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatDialogModule, MatChipsModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatSnackBarModule, MatTabsModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatSidenavModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
  MatTooltipModule,
  MatToolbarModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule, MatPaginatorModule, MatSortModule,
  MatStepperModule, MatTableModule,
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserCardComponent} from './main-content/user-card/user-card.component';
import {SearchComponent} from './main-content/search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiRequestsService} from "./api-requests.service";
import { AddPlateNumberComponent } from './main-content/add-plate-number/add-plate-number.component';
import { MapValuesPipe } from './map-values.pipe';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainContentComponent,
    UserCardComponent,
    SearchComponent,
    AddPlateNumberComponent,
    MapValuesPipe,
    DialogContentComponent,
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    ApiRequestsService,
    MapValuesPipe,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogContentComponent
  ]
})
export class AppModule {
}
