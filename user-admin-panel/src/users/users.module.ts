import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users.routing';
import { UsersComponent } from './users.component';
import { AppComponent } from 'src/app/app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { FieldEditComponent } from './user-list/field-edit/field-edit.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UserListComponent,
    FieldEditComponent
  ],
  imports: [
    UsersRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class UsersModule { }
