import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AddProductComponent } from './pages/add-product/add-product.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: '', redirectTo: 'admin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
