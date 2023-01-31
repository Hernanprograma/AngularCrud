import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInterface, LoginResponse } from '../../interfaces/auth.interfaces';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  public register: LoginInterface = {
    email: '',
    password: ''
  };

  public loginResponse!: LoginResponse;

  public onSubmit(): void {
    this.authService.register(this.register).subscribe(loginData => {
      this.loginResponse = loginData;
      console.log({ loginData });
      this.router.navigate(['/'])
    });
  }

}
