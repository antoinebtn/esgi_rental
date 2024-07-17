import { Component } from '@angular/core';
import { Booking } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  booking: Booking | null = null;
  userId: number | null = null;

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.bookingService.getReservation().subscribe(details => {
      this.booking = details

      this.userId = this.authService.getUserIdFromToken();
      if (!details || !details.startDate || !details.endDate) {
        this.router.navigate(['/search-results']);
      }
    });
  }

  proceedToPayment(): void {
    if (this.booking) {
      if (this.userId === null) {
        this.router.navigate(['/login']);
      } else {
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
}
