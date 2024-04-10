import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css',
})
export class EditTripComponent implements OnInit {
  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataServive: TripDataService
  ) {}

  ngOnInit(): void {
    let tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert('Something wrong. Could not find where I stashed tripCode!');
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: [null, Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.tripDataServive.getTrip(tripCode).subscribe({
      next: (value: any) => {
        this.trip = value;
        if (value.length > 0) {
          // reformat the start date so it can be reflected in the Edit form
          const start = value[0].start;
          value[0].start = start.split('T')[0];
          // Patch the converted value into the form
          this.editForm.patchValue(value[0]);
          this.message = 'Trip: ' + tripCode + ' retrieved';
        } else {
          this.message = 'No trip retrieved!';
        }
      },
      error: (error: any) => {
        console.log('Error ' + error);
      },
    });
  }

  public onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.tripDataServive.updateTrip(this.editForm.value).subscribe({
        next: (value: any) => {
          console.log('value onSubmit >>>', value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        },
      });
    }
  }

  get f() {
    return this.editForm.controls;
  }
}
