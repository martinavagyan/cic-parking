import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {routing} from './app.routes';


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
import {CarOwnerApi} from "./shared/sdk/services/custom/CarOwner";
import {HttpModule} from "@angular/http";
import {SocketConnection} from "./shared/sdk/sockets/socket.connections";
import {SocketDriver} from "./shared/sdk/sockets/socket.driver";
import {SDKModels} from "./shared/sdk/services/custom/SDKModels";
import {LoopBackAuth} from "./shared/sdk/services/core/auth.service";
import {InternalStorage} from "./shared/sdk/storage/storage.swaps";
import {JSONSearchParams} from "./shared/sdk/services/core/search.params";
import {CarOwnerApi} from "./shared/sdk/services/custom/CarOwner";
import {HttpModule} from "@angular/http";

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
    HttpModule,
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
    routing,
  ],
  providers: [
    ApiRequestsService,
    MapValuesPipe,
    RouterModule,
    CarOwnerApi,
    SocketConnection,
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    JSONSearchParams
    CarOwnerApi,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogContentComponent
  ]
})
export class AppModule {
}
