import { Component } from '@angular/core';
import { Booking } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../services/payment.service';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { log } from 'console';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  booking: Booking | null = null
  stripe: Stripe | null = null
  cardElement: any
  publicStripeKey: string = "pk_test_51Pdd2LAQ9Kv9OWU8BsFA88msxPHctydOap8GJSXcKJN2aLmlKHrxFupl2WYXQr30NA1CItYTnDNqI9e2amdYIPxc0097AXOggH"

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private paymentService: PaymentService
  ) {}

  async ngOnInit(): Promise<void> {
    this.stripe = await loadStripe(this.publicStripeKey);

    this.bookingService.getReservation().subscribe(booking => {
      this.booking = booking;
      if (!booking) {
        this.router.navigate(['/']);
      }
    });

    const elements = this.stripe?.elements();
    this.cardElement = elements?.create('card');
    this.cardElement?.mount('#card-element');
  }

  async completePayment(): Promise<void> {
    if (!this.stripe || !this.cardElement || !this.booking) {
      return;
    }

    const { clientSecret } = await this.paymentService.createPaymentIntent(this.booking.totalPrice);

    const { paymentIntent, error } = await this.stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: this.cardElement,
        billing_details: {
          name: 'Nom du client'
        }
      }
    });

    if (error) {
      console.error(error);
      alert('Échec du paiement');
    } else if (paymentIntent?.status === 'succeeded') {
      alert('Paiement réussi');
      this.bookingService.clearReservation();
      this.router.navigate(['/mes-reservations']);
    }
  }
}
