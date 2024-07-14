import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  createReservation(carId: number, startDate: string, endDate: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('currentUser').token);
    return this.http.post<any>(`${this.apiUrl}/reservations`, { carId, startDate, endDate }, { headers });
  }
}
