import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users)
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(users => {
      this.users = users;
    });
  }
}
