import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from 'src/users/users.module';
import { UsersRoutingModule } from 'src/users/users.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UsersRoutingModule,
    AppRoutingModule,
    UsersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
