import { Component } from '@angular/core';
import { ApiUser } from 'src/app/models/user.interface';
import { ApiUsersService } from '../api-users.service';
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from '../user-modal/user-modal.component';

@Component({
  selector: 'app-api-users',
  templateUrl: './api-users.component.html',
  styleUrls: ['./api-users.component.scss']
})
export class ApiUsersComponent {
  usersList: ApiUser[] = [];
  checkesIds: number[] = [];
  sortBy: string = '';
  searchTerm: string = ''

  constructor(private userService: ApiUsersService, private matDialog: MatDialog ){
   }

  ngOnInit() {
    this.userService.getUsers();
    this.userService.users$.subscribe(users => {
      this.usersList = users.map(user => user);
    });
    
  }

  selectAll() {
    this.usersList = this.usersList.map(user => ({ ...user, checked: true }));
  }

  hasCheckedUsers(): boolean {
    return this.usersList.some(user => user.checked);
  }

  deleteSelected() {
    const checkedIds = this.usersList.filter(user => user.checked).map(user => user.id);
    this.userService.deleteUsers(checkedIds);
  }
  onAddUser(){
    this.matDialog.open(UserModalComponent, {
      width:'350px'
    })
  }
  
}
