import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin;
  loggedUser;
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.userService.isLogin.subscribe(res => {
      this.isLogin = this.userService.getLogin();
      this.loggedUser = this.userService.getUser();
    });
  }

  goTologin () {
    this.dialog.open(LoginPageComponent, {
      panelClass: 'col-5',
      disableClose: true
    })
  }

  goTogallery() {
    if (this.isLogin) {
      this.router.navigate(['/gallery']);
    } else {
      this.snackBar.open('Please login to see my wonderfull gallery', 'Ok', {
        duration: 3000
      });
    }
  } 

  logout() {
    this.isLogin = false;
    this.userService.setLogin(false);
    this.router.navigate(['/home']);
  }
}
