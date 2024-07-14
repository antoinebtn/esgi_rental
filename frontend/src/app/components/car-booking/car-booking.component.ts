import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import { BookingService } from '../../services/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-booking.component.html',
  styleUrl: './car-booking.component.css'
})
export class CarBookingComponent {
  car: any;
  startDate!: string | null;
  endDate!: string | null;
  error!: string;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');
    this.startDate = this.route.snapshot.queryParamMap.get('startDate');
    this.endDate = this.route.snapshot.queryParamMap.get('endDate');

    if (carId !== null) {
      this.carService.getCarById(+carId).subscribe(
        (data: any) => {
          this.car = data["data"];
        },
        err => {
          this.error = 'Car not found';
        }
      );
    } else {
      this.error = 'Invalid car ID';
    }
  }

  reserveCar(): void {
    if (this.startDate && this.endDate) {
      this.bookingService.createReservation(this.car.id, this.startDate, this.endDate).subscribe(
        data => {
          alert('Reservation successful');
          this.router.navigate(['/mes-reservations']);
        },
        err => {
          this.error = 'Reservation failed';
        }
      );
    } else {
      this.error = 'Invalid dates';
    }
  }
}
