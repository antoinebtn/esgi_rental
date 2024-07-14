export class User {
    id: number;
    name: string;
    email: string;
    password?: string;
  
    constructor(id: number, name: string, email: string, password?: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      if (password) {
        this.password = password;
      }
    }
  }
  