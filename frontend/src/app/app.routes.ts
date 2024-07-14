import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarListComponent },
    { path: 'cars/:id', component: CarDetailComponent },
];
