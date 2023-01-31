import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';


import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [],
})
export class AuthModule { }
