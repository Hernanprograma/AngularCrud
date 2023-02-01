import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';


import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [],
})
export class AuthModule { }
