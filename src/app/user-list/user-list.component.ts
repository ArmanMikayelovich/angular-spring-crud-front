import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../User';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;


  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.users = this.userService.getUserList();
  }

  deleteUser(userId: bigint) {
    this.userService.deleteById(userId)
      .subscribe(data => {
          console.log(data);
          this.updateData();
        },
        error => console.log(error)
      );
  }

  goToDetails(userId: bigint) {
    this.router.navigate(['/details', userId]);
  }

  goToUpdate(userId: bigint) {
    this.router.navigate(['/update', userId]);
  }
}
