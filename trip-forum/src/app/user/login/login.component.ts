import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  login(email: string, password: string): void {
    //for now we are not handling the data
    this.userService.login(email, password).subscribe((res) => {
      localStorage.setItem('user', JSON.stringify(res));
    });
  }
}
