import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInterface } from '../../interfaces/auth.interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private autService: AuthService,
    private router: Router
  ) { }
  public login: LoginInterface = {
    email: '',
    password: ''
  };
  onSubmit(): void {
    this.autService.login(this.login).subscribe(loginResponse => {
      console.error('onSubmit');
      console.log({ loginResponse });
      this.router.navigate(['/'])
    })


  }

}
