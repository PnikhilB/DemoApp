import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  productList: Product[] = [
    { id: 1, name: 'Product 1', rate: 55, quality: 1 },
    { id: 2, name: 'Product 2', rate: 98, quality: 1 },
    { id: 3, name: 'Product 3', rate: 105, quality: 3 },
    { id: 4, name: 'Product 4', rate: 33, quality: 2 },
    { id: 5, name: 'Product 5', rate: 54, quality: 1 }
  ];

  public getProducts(): Observable<Product[]> {
    return of<Product[]>(
      this.productList
    )
  }

  public addProduct(Product: Product): Observable<Product> {
    this.productList.push(Product);
    return of<Product>(
      this.productList[this.productList.length - 1]
    )
  }

  public delteProduct(id: number): Observable<Product> {
    let index = this.productList.findIndex(x => x.id === id);
    let ObjToBeDelete: Product = this.productList[index];
    this.productList.splice(index, 1);
    return of<Product>(
      ObjToBeDelete
    );
  }
}
