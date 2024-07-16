import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private reservationSubject = new BehaviorSubject<Booking | null>(null);

  setReservation(details: Booking): void {
    this.reservationSubject.next(details);
  }

  getReservation(): Observable<Booking | null> {
    return this.reservationSubject.asObservable();
  }

  clearReservation(): void {
    this.reservationSubject.next(null);
  }
}
