import { Injectable } from '@angular/core';
import { UserRole } from '../enums/userRole.enum';
import { UserLoginModel } from '../models/userLogin.model';
import { LocalstorageService } from './localstorage.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLogins: UserLoginModel[];
  constructor(private localStorageService: LocalstorageService) {
    this.setUserLoginArray();
  }

  setUserLoginArray() {
    this.userLogins = [
      { username: 'user', password: 'user', role: UserRole.User },
      { username: 'admin', password: 'admin', role: UserRole.Admin }
    ];
  }

  checkCredentials(userLogin: UserLoginModel) {
    const currentUser = this.userLogins.find(
      u => u.username === userLogin.username && u.password === userLogin.password
    );
    if (currentUser) {
      this.localStorageService.setCurrentUser(currentUser);
      return currentUser;
    } else {
      return false;
    }
  }
}
