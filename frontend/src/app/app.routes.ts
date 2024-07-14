import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarBookingComponent } from './components/car-booking/car-booking.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarListComponent },
    { path: 'cars/:id', component: CarDetailComponent },
    { path: 'search-results', component: SearchResultsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'car-booking/:id', component: CarBookingComponent },
];
