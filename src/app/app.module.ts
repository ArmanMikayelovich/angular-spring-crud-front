import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UserListComponent },
      { path: 'add', component: CreateUserComponent },
      { path: 'update/:id', component: UpdateUserComponent },
      { path: 'details/:id', component: UserDetailsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
