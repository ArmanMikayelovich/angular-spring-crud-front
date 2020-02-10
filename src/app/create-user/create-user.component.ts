import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  submitted = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {

  }


  newUser() {
    this.user = new User();
    this.submitted = false;
  }


  save() {
    this.userService.createUser(this.user).subscribe(
      data => {
        console.log(data);
        this.user = new User();
        this.goToList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/users']);
  }

}
