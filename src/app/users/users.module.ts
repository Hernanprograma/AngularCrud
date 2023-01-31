import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './pages/user-card/user-card.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserCardComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UserCardComponent,
    UserListComponent
  ]
})
export class UsersModule { }
