import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { SharedModule } from '../../shared/shared.module';
import { UserProductsViewComponent } from './components/user-products-view/user-products-view.component';


@NgModule({
  declarations: [UserLayoutComponent, UserProductsViewComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
