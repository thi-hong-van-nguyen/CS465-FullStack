import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root',
})
export class TripDataService {
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  // Retrieve the token from storage
  token = this.storage.getItem('travlr-token');

  // Set the authorization header with the token
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  url = 'http://localhost:3000/api/trips';

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  getTrip(tripCode: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, formData, { headers: this.headers });
  }

  updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      this.url + '/' + this.storage.getItem('tripCode'),
      formData,
      {
        headers: this.headers,
      }
    );
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error?.error?.message || 'Unauthorized');
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `http://localhost:3000/api/${urlPath}`;
    return this.http
      .post<AuthResponse>(url, user)
      .toPromise()
      .catch(this.handleError);
  }
}
