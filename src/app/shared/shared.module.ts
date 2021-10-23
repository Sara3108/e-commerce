import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginIconComponent } from './svgs/login-icon/login-icon.component';
import { PasswordIconComponent } from './svgs/password-icon/password-icon.component';
import { LogoutIconComponent } from './svgs/logout-icon/logout-icon.component';
import { AddIconComponent } from './svgs/add-icon/add-icon.component';
import { DeleteIconComponent } from './svgs/delete-icon/delete-icon.component';
import { EditIconComponent } from './svgs/edit-icon/edit-icon.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ArrowIconComponent } from './svgs/arrow-icon/arrow-icon.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortTxtPipe } from './pipes/short-txt.pipe';


export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    HeaderComponent,
    LoginIconComponent,
    PasswordIconComponent,
    LogoutIconComponent,
    AddIconComponent,
    DeleteIconComponent,
    EditIconComponent,
    LoadingComponent,
    ArrowIconComponent,
    PaginatorComponent,
    ShortTxtPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    TranslateModule,
    LoginIconComponent,
    PasswordIconComponent,
    HeaderComponent,
    LogoutIconComponent,
    AddIconComponent,
    DeleteIconComponent,
    EditIconComponent,
    LoadingComponent,
    ArrowIconComponent,
    PaginatorComponent,
    FormsModule,
    ReactiveFormsModule,
    ShortTxtPipe


  ]
})
export class SharedModule { }
