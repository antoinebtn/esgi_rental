import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Booking } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  cars: Car[] = [];
  location: string ;
  startDate: Date | null = null;
  endDate: Date | null = null;
  nbrOfDay: number = 1;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private bookingService: BookingService,
    private router: Router
  ) {
    this.location = "Paris"
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.location = params['location'];
      const startDateString = params['startDate'];
      const endDateString = params['endDate'];

      if (startDateString && endDateString) {
        this.startDate = new Date(startDateString);
        this.endDate = new Date(endDateString);
        this.nbrOfDay = this.calculateDaysDifference(this.startDate, this.endDate)
  
        this.carService.searchCars(this.location, this.startDate, this.endDate).subscribe((data: any) => {        
          this.cars = data['data'];
        });
      }
    });
  }

  calculateDaysDifference(startDate: Date, endDate: Date): number {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime = endDate.getTime() - startDate.getTime();
    return Math.round(diffInTime / oneDay);
  }

  selectCar(car: Car): void {
    if (this.startDate && this.endDate && this.nbrOfDay !== null) {
      const totalPrice = car.pricePerDay * this.nbrOfDay;
      const booking: Booking = {
        car,
        startDate: this.startDate,
        endDate: this.endDate,
        totalPrice,
        duration: this.nbrOfDay
      };
      this.bookingService.setReservation(booking);
      this.router.navigate(['/confirmation']);
    } else {
      console.error('Start date, end date, or duration is null');
    }
  }
}
