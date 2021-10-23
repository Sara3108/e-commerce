import { Injectable } from '@angular/core';
import { UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRole } from '../enums/userRole.enum';
import { UserLoginModel } from '../models/userLogin.model';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanLoad {
  constructor(private localstorageService: LocalstorageService) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const user: UserLoginModel = this.localstorageService.getCurrentUser();
    if (user.role === UserRole.User) {
      return true;
    } else {
      return false;
    }
  }
  
}
