import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.searchForm = this.fb.group({
      location: ['Lille', Validators.required],
      startDate: ['', Validators.required],
      startTime: ['12:00', Validators.required],
      endDate: ['', Validators.required],
      endTime: ['12:00', Validators.required]
    });
  }

  ngOnInit(): void {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    this.searchForm.patchValue({
      startDate: today.toISOString().split('T')[0],
      endDate: tomorrow.toISOString().split('T')[0]
    });
  }

  onSearch() {
    
    if (this.searchForm.valid) {
      const formValues = this.searchForm.value;
      const queryParams = {
        location: formValues.location,
        startDate: `${formValues.startDate}T${formValues.startTime}:00`,
        endDate: `${formValues.endDate}T${formValues.endTime}:00`
      };
      this.router.navigate(['/search-results'], { queryParams });
    }
  }
}
