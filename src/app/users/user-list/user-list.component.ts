import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';
import { UserService } from '../users.service';
import { User, UserWithCheck } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  users: UserWithCheck[] = [];
  checkesIds: number[] = [];
  sortBy: string = '';
  searchTerm: string = ''

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers();
    this.userService.users$.subscribe(users => {
      this.users = users.map(user => ({ ...user, checked: false }));
    });
  }

  selectAll() {
    this.users = this.users.map(user => ({ ...user, checked: true }));
  }

  hasCheckedUsers(): boolean {
    return this.users.some(user => user.checked);
  }

  deleteSelected() {
    const checkedIds = this.users.filter(user => user.checked).map(user => user.id);
    this.userService.deleteUsers(checkedIds);
  }
}