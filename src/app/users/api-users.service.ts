import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ApiUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private users$$ = new BehaviorSubject<ApiUser[]>([]);
  users$ = this.users$$.asObservable();

  constructor(private http: HttpClient) { }

  getUsers(): void {
    this.http.get<ApiUser[]>(this.apiUrl)
      .pipe(
        map(users => {
          return users.map(user => {
            return {
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              avatar: `https://i.pravatar.cc/400?u=${user.id+10}`,
              phone: user.phone,
              checked: false
            };
          });
        })
      )
      .subscribe(users => {
        this.users$$.next(users);
      });
  }

  deleteUsers(userIds: number[]): void {
    const url = `${this.apiUrl}/${userIds.join(',')}`;
    this.http.delete(url).subscribe(() => {
      const updatedUsers = this.users$$.value.filter(user => !userIds.includes(user.id));
      this.users$$.next(updatedUsers);
    });
  }

  addUser(user: ApiUser): void {
    this.http.post<ApiUser>(this.apiUrl, user)
      .subscribe(newUser => {
        const updatedUsers = [...this.users$$.value, newUser];
        this.users$$.next(updatedUsers);
      });
  }

  userAfterSave(userData: any): ApiUser {
    const id = Math.floor(Math.random() * 1000);
    const { firstName, lastName, email, phoneNumber } = userData;
    const name = `${firstName} ${lastName}`;
    return {
      id,
      name,
      username: '',
      email,
      phone: phoneNumber,
      avatar: `https://i.pravatar.cc/400?u=${id + 10}`,
      checked: false
    };
  }
  
  
}
