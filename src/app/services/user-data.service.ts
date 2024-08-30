import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

// Interface to define the user data structure
export interface UserData {
  id: string;
  name: string;
  data: { [key: string]: any } | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private url = 'https://api.restful-api.dev/objects'; // Your API URL

  constructor(private http: HttpClient) {}

  // Method to fetch users
  users(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.url).pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]); // Return an empty array in case of an error
      })
    );
  }

  // Method to save users
  saveUsers(data: UserData): Observable<any> {
    return this.http.post(this.url, data).pipe(
      catchError(error => {
        console.error('Error saving user:', error);
        return of(null); // Return null in case of an error
      })
    );
  }
}
