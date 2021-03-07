import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialogRef } from "@angular/material/dialog";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  userData = [];
  constructor(
    private dialogRef: MatDialogRef<LoginPageComponent>,
    private userSerice: UserService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userData = this.userSerice.getData();
    this.loginForm = this.fb.group({
      userId: [null, Validators.required],
      pwd: [null, Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  signIn() {
    const data = this.loginForm.value;
    if (this.userData && this.userData.length) {
      const isAvl = this.userData.find(
        (user) => user.userid === data.userId && user.password === data.pwd
      );
      if (isAvl) {
        this.close();
        this.userSerice.setLogin(true);
        this.userSerice.isLogin.next(true);
        this.userSerice.setUser(isAvl);
      } else {
        this.snackBar.open("Invalid Credentials", "Ok", {
          duration: 3000
        });
      }
    }
  }
}
