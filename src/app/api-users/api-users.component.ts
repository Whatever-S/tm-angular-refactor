import { Component } from '@angular/core';
import { ApiUsersService } from '../services/api-users.service';
import { ApiUser } from '../models/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from './modal-form/modal-form.component';

@Component({
  selector: 'app-api-users',
  templateUrl: './api-users.component.html',
  styleUrls: ['./api-users.component.scss']
})
export class ApiUsersComponent {
  users: ApiUser[] = [];
  sortBy: string = '';
  searchTerm: string = '';

  constructor(private userService: ApiUsersService, private matDialog: MatDialog ){
  }

  ngOnInit() {
    this.userService.getUsers();
    this.userService.users$.subscribe(users => {
      this.users = users.map(user => user);
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

  createUser(){
    this.matDialog.open(ModalFormComponent, {
      width:'350px'
    })
  }

}
