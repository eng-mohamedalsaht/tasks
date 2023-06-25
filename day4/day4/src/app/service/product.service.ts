import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://localhost:3005/products'
  constructor(private http: HttpClient) {

  }
  getallproducts() {
    return this.http.get(this.url);
  }
  getproduct(prodid: any) {
    return this.http.get(`${this.url}/${prodid}`);
  }
  addproduct(product: any) {
    return this.http.post(this.url, product);
  }
  editproduct(prodid: any, product: any,) {
    return this.http.put(`${this.url}/${prodid}`, product);
  }
  deletproduct(prodid: any) {
    return this.http.delete(`${this.url}/${prodid}`);
  }
}
