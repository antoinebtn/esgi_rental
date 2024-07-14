import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  createReservation(carId: number, startDate: string, endDate: string): Observable<any> {
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
      return throwError('User is not authenticated');
    }

    const user = JSON.parse(currentUser); // Convertir la chaîne JSON en objet
    const token = user.token; // Accéder à la propriété token
    const headers = new HttpHeaders().set('Authorization', token);

    return this.http.post<any>(`${this.apiUrl}/reservations`, { carId, startDate, endDate }, { headers })
      .pipe(
        catchError(err => {
          console.error('Reservation creation failed', err);
          return throwError(err);
        })
      );
  }
}
