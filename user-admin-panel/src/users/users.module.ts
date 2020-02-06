import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users.routing';
import { UsersComponent } from './users.component';
import { AppComponent } from 'src/app/app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    UsersRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class UsersModule { }
