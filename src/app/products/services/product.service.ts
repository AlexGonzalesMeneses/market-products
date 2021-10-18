import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getProductsById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }

  postProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseUrl}/products/${product.id}`,
      product
    );
  }

  getProductsByProviderId(providerId: string) {
    return this.http.get<Product[]>(`${this.baseUrl}/products?providerId=${providerId}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/products/${id}`);
  }
}
