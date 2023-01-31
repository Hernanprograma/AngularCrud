import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginInterface, LoginResponse, RegisterResponse } from '../interfaces/auth.interfaces';


@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://reqres.in/api'
  private loginResponse?: LoginResponse;

  get currentLoginResponse(): LoginResponse | undefined {
    if (!this.loginResponse) return undefined;
    return structuredClone(this.loginResponse);
  }

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
    return this.http.post<RegisterResponse>(url, data);
  }
}






