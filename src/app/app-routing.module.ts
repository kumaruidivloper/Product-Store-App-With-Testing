import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './features/products/products.component';
import { ProductFormComponent } from './features/product-form/product-form.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';

import { NotFoundComponent } from './features/not-found/not-found.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/new', component: ProductFormComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
