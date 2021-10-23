import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminProductsViewComponent } from './components/admin-products-view/admin-products-view.component';
import { AddUpdateProductModalComponent } from './components/add-update-product-modal/add-update-product-modal.component';
import { DeleteProductModalComponent } from './components/delete-product-modal/delete-product-modal.component';



@NgModule({
  declarations: [AdminLayoutComponent, AdminProductsViewComponent, AddUpdateProductModalComponent, DeleteProductModalComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
