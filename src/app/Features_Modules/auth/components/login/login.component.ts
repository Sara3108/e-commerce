import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserRole } from 'src/app/Core/enums/userRole.enum';
import { AppTranslateService } from '../../../../Core/services/app-translate.service';
import { LoginService } from '../../../../Core/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentLanguage: string;
  loginForm: FormGroup;

  constructor(private appTranslateService: AppTranslateService,
    private translate: TranslateService,
    private loginService: LoginService,
    private router: Router) {
    appTranslateService.setDefaultLang();
    this.currentLanguage = appTranslateService.currentLanguage;
    translate.use(this.currentLanguage);
    this.createLoginForm();
  }

  ngOnInit(): void {
    this.appTranslateService.languageChanged.subscribe((lang: string) => {
      this.currentLanguage = lang;
      this.translate.use(this.currentLanguage);
    });
  }

  /** switch language when user change it */
  switchLang(): void {
    this.appTranslateService.switchLang();
  }

  /** create form group and its controls */
  createLoginForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  /** submit login form and load user moduele if role is user 
   * and load admin module id roule is admin
   */
  submitLogin() {
    if (this.loginForm.valid) {
      const user = this.loginService.checkCredentials(this.loginForm.value);
      if (user) {
        user.role === UserRole.Admin ?
          this.router.navigate(['/admin']) :
          this.router.navigate(['/user']);
      } else {
        alert('faild')
      }
    }
  }

}
