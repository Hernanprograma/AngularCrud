import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/pages/user-list/user-list.component';
import { UserCardComponent } from './users/pages/user-card/user-card.component';

const routes: Routes = [

  {
    path: 'home',
    component: UserListComponent
  },
  {
    path: 'user',
    component: UserCardComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
