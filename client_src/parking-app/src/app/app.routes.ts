import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserCardComponent} from "./main-content/user-card/user-card.component";
import {SearchComponent} from "./main-content/search/search.component";
import {AddPlateNumberComponent} from "./main-content/add-plate-number/add-plate-number.component";


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SearchComponent},

  { path: 'user/:plateNumber', component: UserCardComponent },
  { path: 'add-user', component: AddPlateNumberComponent },

  // { path: 'home', component: HomeComponent },
  // { path: '**', component: ErrorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
