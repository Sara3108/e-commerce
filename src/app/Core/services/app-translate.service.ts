import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { UserLanguage } from '../enums/userLanguage.enum';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AppTranslateService {
  currentLanguage: string;
  languageChanged = new Subject();
  constructor(private loacalstorageService: LocalstorageService,
    private translate: TranslateService) {
      this.languageChanged.subscribe((lang: string) => {
        this.currentLanguage = lang;
        this.translate.use(this.currentLanguage);
      })
  }

  setLanguage(languageKey) {
    this.currentLanguage = languageKey === UserLanguage.English ? 'en' : 'ar';
    this.loacalstorageService.setLanguage(this.currentLanguage);
    this.languageChanged.next(this.currentLanguage);
    this.changeViewDirection(languageKey);
  }

  changeViewDirection(languageKey) {
    languageKey === UserLanguage.English ?
      document.body.classList.remove('rtl') :
      document.body.classList.add('rtl');
  }

  setDefaultLang() {
    const lang = this.loacalstorageService.getLanguage();
    if (lang) {
      this.currentLanguage = lang;
    } else {
      this.currentLanguage = 'en';
      this.loacalstorageService.setLanguage(this.currentLanguage);
    }
    this.translate.setDefaultLang(this.currentLanguage);
  }

  switchLang() {
    if (this.currentLanguage === 'en') {
      this.setLanguage(UserLanguage.Arabic);
    } else {
      this.setLanguage(UserLanguage.English);
    }
  }
}
