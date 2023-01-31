import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UsersServiceService } from '../../services/users-service.service';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  public user!: User;
  constructor(private usersService: UsersServiceService) {
    this.getUser(1);
  }

  public getUser(id: number): void {
    this.usersService.getUser(1).subscribe(user => {
      this.user = user.data;
      console.log(this.user);
    })
  }

}
