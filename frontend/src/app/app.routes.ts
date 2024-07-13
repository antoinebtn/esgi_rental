import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarListComponent },
    { path: 'cars/:id', component: CarDetailComponent },
];
