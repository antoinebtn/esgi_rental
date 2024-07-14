import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  cars: Car[] = [];
  location: any;
  startDate: any;
  endDate: any;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.location = params['location'];
      this.startDate = params['startDate'];
      this.endDate = params['endDate'];

      this.carService.searchCars(this.location, this.startDate, this.endDate).subscribe((data: any) => {        
        this.cars = data['data'];
      });
    });
  }
}
