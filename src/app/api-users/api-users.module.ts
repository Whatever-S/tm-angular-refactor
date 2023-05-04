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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiUsersComponent } from './api-users.component';
import { ToolbarApiComponent } from './toolbar/toolbar.component';
import { UsersListComponent } from './users-list/users-list.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterByNamePipe } from './pipes/filter.pipe';
import { ModalFormComponent } from './modal-form/modal-form.component';

@NgModule({
  declarations: [
    ApiUsersComponent,
    UsersListComponent,
    ToolbarApiComponent,
    OrderByPipe,
    FilterByNamePipe,
    ModalFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ApiUsersComponent
  ]
})
export class ApiUsersModule { }
