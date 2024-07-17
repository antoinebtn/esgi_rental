import { Component } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';
import { Booking } from '../../models/booking.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  booking: Booking | null = null;

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
    this.bookingService.getReservation().subscribe(booking => {
      this.booking = booking;
      
      if (!this.booking) {
        this.router.navigate(['/']);
      }
    });
  }

  proceedToPayment(): void {
    this.router.navigate(['/payment']);
  }
}
