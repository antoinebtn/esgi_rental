import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data: any) => {
      this.cars = data['data'];
    });
  }
}
