// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5010/products';

  constructor(private http: HttpClient) {}

  getProducts(searchTerm = ''): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?q=${searchTerm}`);
  }
}
