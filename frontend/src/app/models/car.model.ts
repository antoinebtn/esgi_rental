export class Car {
    id: number;
    name: string;
    description: string;
    price: number;
    picture: string;
  
    constructor(id: number, name: string, description: string, price: number, imageUrl: string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.picture = imageUrl;
    }
}
  