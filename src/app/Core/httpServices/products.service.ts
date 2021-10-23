import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = "https://fakestoreapi.com";
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl + '/products');
  }

  addProduct(product: ProductModel) {
    return this.http.post(this.baseUrl + '/products', JSON.stringify(product));
  }

  updateProduct(product: ProductModel) {
    return this.http.put(this.baseUrl + '/products/' + product.id, JSON.stringify(product));
  }

  deleteProduct(productId: number) {
    return this.http.delete(this.baseUrl + '/products/' + productId);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + '/products/categories');
  }
}
