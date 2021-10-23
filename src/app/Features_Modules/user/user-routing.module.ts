import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLayoutComponent} from './components/user-layout/user-layout.component'
import {UserProductsViewComponent} from './components/user-products-view/user-products-view.component'

const routes: Routes = [
  {path: '' , component: UserLayoutComponent, children: [
    {path: '' , component: UserProductsViewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
