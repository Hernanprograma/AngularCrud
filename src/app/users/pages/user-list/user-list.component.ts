import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UsersServiceService } from '../../services/users-service.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public users: User[] = [];
  constructor(private usersService: UsersServiceService) {
    this.getUsers();
  }

  public getUsers(): void {
    this.usersService.getUsers().subscribe(usersResponse => {
      this.users = usersResponse.data;
      console.log(this.users);
    })
  }
}
