import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '../../assets/data.json';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  deleteUser(id: number): Observable<User[]> {
    return this.getUsers().pipe(
      map(users => {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
          users.splice(index, 1);
        }
        return users;
      })
    );
  }
}
