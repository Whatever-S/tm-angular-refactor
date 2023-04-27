import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      firstName: 'Leanne',
      lastName: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442'
    },
    {
      id: 2,
      firstName: 'Ervin',
      lastName: 'Howell',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593 x09125'
    },
    {
      id: 3,
      firstName: 'Clementine',
      lastName: 'Bauch',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447'
    },
    {
      id: 4,
      firstName: 'Patricia',
      lastName: 'Lebsack',
      email: 'Julianne.OConner@kory.org',
      phone: '493-170-9623 x156'
    }
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
