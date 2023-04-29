import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User, UserWithCheck } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = '../../assets/data.json';
  private users$$ = new BehaviorSubject<UserWithCheck[]>([]);
  users$ = this.users$$.asObservable();

  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get<User[]>(this.apiUrl).pipe(
      map((users: User[]) => {
        return users.map(user => {
          return {
            ...user,
            checked: false
          };
        });
      })
    ).subscribe(users => {
      this.users$$.next(users);
    });
  }

  deleteUsers(userIds: number[]) {
    const updatedUsers = this.users$$.getValue().filter(user => !userIds.includes(user.id));
    this.users$$.next(updatedUsers);
  }

}