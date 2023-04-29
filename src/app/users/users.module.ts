import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from "@angular/material/button";

import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterByNamePipe } from './pipes/filter.pipe'; 



@NgModule({
  declarations: [
    UserListComponent,
    OrderByPipe,
    FilterByNamePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
  ],
  exports:[
    UserListComponent
  ]
})
export class UsersModule { }
