export class Car {
    id: number;
    name: string;
    description: string;
    pricePerDay: number;
    picture: string;
    numberOfSeat: string;
  
    constructor(id: number, name: string, description: string, pricePerDay: number, picture: string, numberOfSeat: string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.pricePerDay = pricePerDay;
      this.picture = picture;
      this.numberOfSeat = numberOfSeat;
    }
}
  