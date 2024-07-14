import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent {
  car!: Car;
  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.carService.getCarById(id).subscribe((data: any) => {
      this.car = data['data'];
    });
  }
}
