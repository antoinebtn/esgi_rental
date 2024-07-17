import { Component } from '@angular/core';
import { Booking } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';
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
  userId: number = 1;

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookingService.getReservation().subscribe(details => {
      this.booking = details;
      if (!details || !details.startDate || !details.endDate) {
        this.router.navigate(['/search-results']);
      }
    });
  }

  proceedToPayment(): void {
    if (this.booking) {
      this.bookingService.createReservation(this.booking, this.userId).subscribe({
        next: (response) => {
          console.log('Réservation réussie :', response);
          this.router.navigate(['/bookings']);
        },
        error: (err) => {
          console.error('Erreur lors de la réservation :', err);
        }
      });
    }
  }
}
