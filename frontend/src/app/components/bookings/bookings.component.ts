import { Component } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  bookings: any[] = [];

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
  
    this.bookingService.getUserReservations().subscribe({
      next: (data) => {
        console.log(typeof data);
        console.log(data);
        
        this.bookings = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des réservations :', err);
      }
    });
  }
}
