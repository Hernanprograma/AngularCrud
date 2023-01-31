import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UsersResponse, UserResponseById } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private apiUrl: string = 'https://reqres.in/api'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersResponse> {
    const url: string = `${this.apiUrl}/users`;
    return this.http.get<UsersResponse>(url);
  }

  getUser(id: number): Observable<UserResponseById> {
    const url: string = `${this.apiUrl}/users/${id}`;
    return this.http.get<UserResponseById>(url);
  }

  deleteUser(id: number): Observable<UserResponseById> {
    const url: string = `${this.apiUrl}/users/${id}`;
    return this.http.delete<UserResponseById>(url);
  }

}
