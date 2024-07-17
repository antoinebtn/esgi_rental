import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private reservationSubject = new BehaviorSubject<Booking | null>(null);

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private authService: AuthService) {}

  setReservation(details: Booking): void {
    this.reservationSubject.next(details);
  }

  getReservation(): Observable<Booking | null> {
    return this.reservationSubject.asObservable();
  }

  clearReservation(): void {
    this.reservationSubject.next(null);
  }

  createReservation(booking: Booking, userId: number): Observable<any> {
    const body = {
      userId,
      carId: booking.car.id,
      startDate: booking.startDate,
      endDate: booking.endDate,
      totalPrice: booking.totalPrice,
      duration: booking.duration
    };
    return this.http.post<any>(`${this.apiUrl}/bookings`, body);
  }

  getUserReservations(): Observable<Booking[]> {
    const userId = this.authService.getUserIdFromToken();
    return this.http.get<Booking[]>(`${this.apiUrl}/users/${userId}/bookings`);
  }
}
