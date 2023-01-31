import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UsersServiceService } from '../../services/users-service.service';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public user: User = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };
  public id!: number;
  constructor(private usersService: UsersServiceService, private route: ActivatedRoute,) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUser();
  }

  public getUser(): void {
    this.usersService.getUser(this.id).subscribe(user => {
      this.user = user.data;

    })
  }

}
