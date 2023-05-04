import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarApiComponent {
  @Input() users: ApiUser[] = []
  @Output() sortBy = new EventEmitter<string>
  @Output() searchTerm = new EventEmitter<string>
  @Output() selectAll = new EventEmitter();
  @Output() createUser = new EventEmitter();
  @Output() deleteSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hasCheckedUsers(): boolean {
    return this.users.some(user => user.checked);
  }
}
