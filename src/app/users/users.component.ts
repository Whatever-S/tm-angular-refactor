import { Component } from '@angular/core';
import { UserWithCheck } from '../models/user.interface';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
  users: UserWithCheck[]  = [];
  sortBy: string = '';
  searchTerm: string = '';

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

  deleteSelected() {
    const checkedIds = this.users.filter(user => user.checked).map(user => user.id);
    this.userService.deleteUsers(checkedIds);
  }

  sortUpdate(sort: string){
    this.sortBy = sort
  }

  searchTermUpdate(term: string){
    this.searchTerm = term
  }

}
