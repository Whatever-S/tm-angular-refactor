import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() sortBy: string = '';
  @Input() searchTerm: string = '';
  @Input() hasCheckedUsers(): boolean  ;
  @Output() selectAll = new EventEmitter();
  @Output() deleteSelected = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  hasCheckedUsers(){

  }

}
