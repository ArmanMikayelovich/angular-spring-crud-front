import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {UserService} from '../user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  submitted = false;
  id: bigint;
  user: User;
  haveError = false;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params.id;

    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      }, error => console.log(error));
  }

  updateUser() {

    this.userService.updateUser(this.id, this.user)
      .subscribe(() => {
          this.gotoList();
        },
        error => {
          this.haveError = true;
        });
  }

  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }


}

