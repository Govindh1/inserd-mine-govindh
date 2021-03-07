import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable({ providedIn: "root" })
export class userResolver implements Resolve<any> {
  constructor(private userService: UserService,
    private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    if (this.userService.getLogin()) {
        return;
    } else {
        this.router.navigate(['/home']);
    }
  }
}
