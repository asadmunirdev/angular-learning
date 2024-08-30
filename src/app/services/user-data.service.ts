import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface UserData {
  id: string;
  name: string;
  data: { [key: string]: any } | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private url = 'https://api.restful-api.dev/objects';

  constructor(private http: HttpClient) {}

  users(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.url).pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]); // Return an empty array in case of an error
      })
    );
  }
}
