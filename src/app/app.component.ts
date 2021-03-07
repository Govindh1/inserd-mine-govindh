import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'insuredmine-assessment';
  constructor(
    private userService: UserService

  ) {
    this.userService.setData();
    this.userService.setLogin(false);
  }
}
