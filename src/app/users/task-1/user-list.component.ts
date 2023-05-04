import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';
import { UserWithCheck } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  @Input() users: UserWithCheck[] = [];
  @Input() sortBy: string = '';
  @Input() searchTerm: string = '';
   
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
