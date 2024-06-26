import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css',
})
export class AddTripComponent implements OnInit {
  formError = '';
  addForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public onSubmit() {
    this.formError = '';
    this.submitted = true;
    if (this.addForm.valid) {
      this.tripService.addTrip(this.addForm.value).subscribe({
        next: (data: any) => {
          this.router.navigate(['']);
        },
        error: (error: any) => {
          const errorMsg = error?.error?.message ? error?.error?.message : '';
          this.formError = errorMsg;
        },
      });
    }
  }

  get f() {
    return this.addForm.controls;
  }
}
