import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of } from 'rxjs';
import { LoginInterface, LoginResponse, RegisterResponse } from '../interfaces/auth.interfaces';
import { User } from 'src/app/users/interfaces/user.interface';


@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://reqres.in/api'
  private loginResponse?: LoginResponse;
  private registerResponse?: RegisterResponse;


  login(data: LoginInterface): Observable<LoginResponse> {
    const url: string = `${this.apiUrl}/login`;
    return this.http.post<LoginResponse>(url, data)
      .pipe(
        tap(response => this.loginResponse = response),
        tap(response => localStorage.setItem('token', response.token)),
      )
  }

  register(data: LoginInterface): Observable<RegisterResponse> {
    const url: string = `${this.apiUrl}/register`;
    return this.http.post<RegisterResponse>(url, data)
      .pipe(
        tap(response => this.registerResponse = response),
        tap(response => localStorage.setItem('token', response.token)),
      )
  }
  checkAutentication(): Observable<boolean> {
    if (localStorage.getItem('token')) {
      return of(true);
    } else {
      const token = localStorage.getItem('token');
      //TODO:Use this token if id required
      return of(false);
    }
  }

  logout() {
    localStorage.clear();
  }
}






