import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/task-1/user-list.component';

const routes: Routes = [
  { path: 'task1', component: UserListComponent },
  { path: '', redirectTo: '/task1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
