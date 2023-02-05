import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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
