import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/pages/user-list/user-list.component';
import { UserCardComponent } from './users/pages/user-card/user-card.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [

  {
    path: 'home',
    component: UserListComponent,
    canActivate: [AuthGuard],
    canMatch: [AuthGuard]
  },
  {
    path: 'user/:id',
    component: UserCardComponent,
    canActivate: [AuthGuard],
    canMatch: [AuthGuard]
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
