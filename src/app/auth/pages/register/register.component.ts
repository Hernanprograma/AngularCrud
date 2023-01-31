import { Component } from '@angular/core';
import { LoginInterface, LoginResponse } from '../../interfaces/auth.interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService) { }


  public register: LoginInterface = {
    email: '',
    password: ''
  };

  public loginResponse!: LoginResponse;

  public submit(): void {
    this.authService.login(this.register).subscribe(loginData => {
      this.loginResponse = loginData;
      console.log({ loginData });
    });
  }

}
