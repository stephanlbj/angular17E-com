import {  Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import {  productURL } from '../../constant/constants';
 import { Product, Root } from '../../types';
import { catchError, map,  tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cachedProducts = signal<Product[]>([])


   constructor(private apiService: ApiService) { }

   // here, we send a request to our nestjs server from our angular application.
  getAllProducts() {
  return this.apiService.get<Root>(productURL)
  .pipe( map(response => response.products),
     tap(products => {
      // we cache the result
      this.cachedProducts.set(products)
    }),
    catchError(error => {
      console.log('An error occurred while fetching products:', error);
      return [];
    })
  )

  
  }

  getCachedProducts() {
    return this.cachedProducts()
  }

 
}
