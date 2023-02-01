import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UsersServiceService } from '../../services/users.service';

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
    })
  }
  public onDelete(id: number): void {
    this.usersService.deleteUser(id).subscribe(response => {
      let index = this.users.findIndex(objeto => objeto.id === id);
      this.users.splice(index, 1);
    })
  }
}
