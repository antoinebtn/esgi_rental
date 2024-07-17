import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private stripe: Stripe | null = null;

  constructor() {
    this.initStripe();
  }

  private async initStripe() {
    this.stripe = await loadStripe('votre_clé_publique_stripe');
  }

  public async createPaymentIntent(amount: number): Promise<any> {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount })
    });
    return await response.json();
  }

  public getStripe() {
    return this.stripe;
  }
}
