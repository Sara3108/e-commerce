import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './Core/guards/admin.guard';
import { UserGuard } from './Core/guards/user.guard';



const routes: Routes = [
{
  path: 'auth',
  loadChildren: () => import('./Features_Modules/auth/auth.module').then(m => m.AuthModule)
},
{
  path: 'user',
  loadChildren: () => import('./Features_Modules/user/user.module').then(m => m.UserModule),
  canLoad: [UserGuard]
},
{
  path: 'admin',
  loadChildren: () => import('./Features_Modules/admin/admin.module').then(m => m.AdminModule),
  canLoad: [AdminGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
