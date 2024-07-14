export class Car {
    id: number;
    name: string;
    description: string;
    pricePerDay: number;
    picture: string;
  
    constructor(id: number, name: string, description: string, pricePerDay: number, imageUrl: string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.pricePerDay = pricePerDay;
      this.picture = imageUrl;
    }
}
  