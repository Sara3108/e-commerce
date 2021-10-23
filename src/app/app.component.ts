import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from './Core/services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-commerceStore';
  constructor(private localStorageService: LocalstorageService,
    private router: Router){
      this.checkRoute();
    }

    checkRoute(){
      const user = this.localStorageService.getCurrentUser();
      if(!user){
        this.router.navigate(['/auth/login']);
      }
    }
}
