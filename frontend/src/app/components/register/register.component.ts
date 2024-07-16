import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email!: string;
  password!: string;
  error!: string;

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    this.authService.register(this.email, this.password).subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      err => {
        this.error = 'Registration failed';
      }
    );
  }
}
