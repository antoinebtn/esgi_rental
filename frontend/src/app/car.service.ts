import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:3000/api/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getCarById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  rentCar(id: number, rentalData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/rent/${id}`, rentalData);
  }
}
