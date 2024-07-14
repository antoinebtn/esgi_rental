import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:3000/api/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}`);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  searchCars(location: string, startDate: string, endDate: string): Observable<Car[]> {
    const params = { location, startDate, endDate };
    return this.http.get<Car[]>(`${this.apiUrl}/search`, { params });
  }

  rentCar(id: number, rentalData: any): Observable<Car> {
    return this.http.post<Car>(`${this.apiUrl}/rent/${id}`, rentalData);
  }
}
