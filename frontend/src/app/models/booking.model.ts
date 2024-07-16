import { Car } from "./car.model";

export interface Booking {
    car: Car;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
    duration: number;
}
  