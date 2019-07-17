import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from '../../features/product-form/product-form.component';
import { ProductsComponent } from '../../features/products/products.component';
import { ProductDetailComponent } from '../../features/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'new', component: ProductFormComponent },
  { path: ':id', component: ProductDetailComponent },
  { path: ':id/edit', component: ProductFormComponent }
];

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    // ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class ProductsModule { }
