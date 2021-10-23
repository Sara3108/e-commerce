import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminProductsViewComponent } from './components/admin-products-view/admin-products-view.component';


const routes: Routes = [
  {path: '' , component: AdminLayoutComponent, children: [
    {path: '' , component: AdminProductsViewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
