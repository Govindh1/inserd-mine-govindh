import { Injectable } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDB = [ 
    {userid: 'abc@media.com',password:'abc123','username':'tom'}, 
    {userid : 'def@media.com',password:'def123','username':'dick'}
  ]

  public isLogin = new BehaviorSubject(null);
  constructor(
    private sessionStorage: SessionStorageService
  ) { 
  }
  
  setData() {
    this.sessionStorage.store('userData', JSON.stringify(this.userDB));
  }

  getData() {
    return JSON.parse(this.sessionStorage.retrieve('userData'));
  }

  setLogin(data) {
    this.sessionStorage.store('loginToggole', {'isLogin': data});
  } 

  getLogin() {
    return this.sessionStorage.retrieve('loginToggole').isLogin;
  }

  setUser(data) {
    this.sessionStorage.store('logged_user', data);
  }

  getUser () {
    return this.sessionStorage.retrieve('logged_user');
  }
}
