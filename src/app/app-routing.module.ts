import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/pages/user-list/user-list.component';
import { UserCardComponent } from './users/pages/user-card/user-card.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';

const routes: Routes = [

  {
    path: 'home',
    component: UserListComponent
  },
  {
    path: 'user/:id',
    component: UserCardComponent
  },
  {
    path: 'user',
    component: UserCardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
