import { Component } from '@angular/core';
import { Booking } from '../models/booking.model';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  booking: Booking | null = null;

  constructor(private reservationService: BookingService, private router: Router) { }

  ngOnInit(): void {
    this.reservationService.getReservation().subscribe(details => {
      this.booking = details;
      if (!details) {
        this.router.navigate(['/']);
      }
    });
  }

  completePayment(): void {
    // Logic to complete payment
    alert('Payment successful');
    this.reservationService.clearReservation();
    this.router.navigate(['/mes-reservations']);
  }
}
