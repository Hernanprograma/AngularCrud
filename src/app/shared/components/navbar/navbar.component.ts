import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
//TODO:Delete this component
@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogged: boolean = false;
  constructor(
    private authService: AuthService,
    public router: Router,

  ) { }

  public activatedRoute: string = this.router.url;

  isAuthenticated(): boolean {
    this.authService.checkAutentication().subscribe(response => {
      this.isLogged = response;
    })
    return this.isLogged;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
