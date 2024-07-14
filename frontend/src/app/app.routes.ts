import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarListComponent },
    { path: 'cars/:id', component: CarDetailComponent },
    { path: 'search-results', component: SearchResultsComponent },
];
