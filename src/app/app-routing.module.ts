import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiUsersComponent } from './api-users/api-users.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'task1', component: UsersComponent },
  { path: 'task2', component:  ApiUsersComponent},
  { path: '', redirectTo: '/task1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
