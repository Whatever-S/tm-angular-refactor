import { Component, Output, Input, EventEmitter } from '@angular/core';
import { UserWithCheck } from 'src/app/models/user.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() users: UserWithCheck[] = []
  @Output() sortBy = new EventEmitter<string>
  @Output() searchTerm = new EventEmitter<string>
  @Output() selectAll = new EventEmitter();
  @Output() deleteSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hasCheckedUsers(): boolean {
    return this.users.some(user => user.checked);
  }
}
