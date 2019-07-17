import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Product } from '../interfaces/product';
import { AppError } from './../components/common/app-error';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://localhost:3000/products';
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get(this.apiUrl)
      .pipe(map((response: any) => response),
      // .map((response: Response) => response.json())
      catchError(this.handleError));
  }

  getProductsPromise(): Promise<Product[]> {
    return this.http
      .get(this.apiUrl)
      // .map((response: Response) => response.json())
      .pipe(map((response: any) => response),
      catchError(this.handleError))
      .toPromise();
  }

  getProduct(id: number) {
    return this.http
      .get(`${this.apiUrl}/${id}`)
      // .map((response: Response) => response.json())
      .pipe(map((response: any) => response),
      catchError(this.handleError));
  }

  addProduct(product: Product) {
    return this.http
      .post(this.apiUrl, product)
      // .map((response: Response) => response.json())
      .pipe(map((response: any) => response),
      catchError(this.handleError));
  }

  updateProduct(id: number, product: Product) {
    return this.http
      .patch(`${this.apiUrl}/${id}`, product)
      // .map((response: Response) => response.json())
      .pipe(map((response: any) => response),
      catchError(this.handleError));
  }

  deleteProduct(id: number) {
    return this.http
      .delete(`${this.apiUrl}/${id}`)
      // .map((response: Response) => response.json())
      .pipe(map((response: any) => response),
      catchError(this.handleError));
  }

  private handleError(error: Response) {
    return throwError(new AppError(error));
  }
}
