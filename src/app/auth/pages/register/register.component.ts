import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInterface, LoginResponse } from '../../interfaces/auth.interfaces';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControlOptions } from '@angular/forms';



@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public login?: LoginInterface;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  });

  constructor(
    private autService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  get formValue() {
    return this.loginForm.value as LoginInterface;
  }

  onSubmit(): void {
    this.autService.register(this.formValue).subscribe(loginData => {
      this.router.navigate(['/'])
    });

  }
}
