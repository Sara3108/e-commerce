import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateService } from 'src/app/Core/services/app-translate.service';
import { LocalstorageService } from 'src/app/Core/services/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLanguage: string;

  constructor(
    private appTranslateService: AppTranslateService,
    private translate: TranslateService,
    private router: Router,
    private localstorageService: LocalstorageService) {
      
    appTranslateService.setDefaultLang();
    this.currentLanguage = appTranslateService.currentLanguage;
    translate.use(this.currentLanguage);
  }

  ngOnInit(): void {
    this.appTranslateService.languageChanged.subscribe((lang: string) => {
      this.currentLanguage = lang;
      this.translate.use(this.currentLanguage);
    });
  }

  switchLang() {
    this.appTranslateService.switchLang();
  }

  logOut() {
    this.localstorageService.clearCurrentUser();
    this.router.navigate(['/auth/login']);
  }
}
