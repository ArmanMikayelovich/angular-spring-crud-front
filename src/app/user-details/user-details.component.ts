import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: bigint;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id)
      .subscribe(data => {
        this.user = data;
      }, error => console.log(error));
  }

  goToList() {
    this.router.navigate(['users']);
  }

}
