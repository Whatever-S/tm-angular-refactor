import { Component, Input } from '@angular/core';
import { ApiUser } from 'src/app/models/user.interface';
import { ApiUsersService } from 'src/app/services/api-users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users: ApiUser[] = [];
  @Input() sortBy: string = '';
  @Input() searchTerm: string = '';
  
  constructor(private userService: ApiUsersService) { }

  ngOnInit() {
  }
}
