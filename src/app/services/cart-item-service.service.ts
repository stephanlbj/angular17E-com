import { Injectable, signal } from '@angular/core';
import { Product, cartItem } from '../../types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartItemServiceService {

  
  cartItems = signal<cartItem[]>([])

  
  
  
  constructor(private router: Router){}

  getQuantity(product: Product): number {
    const cartItem = this.cartItems().find(item => item.id === product.id);
    return cartItem ? cartItem.qty : 0;
  }

  addToCart(product:Product){

    
    const existingItemIndex = this.cartItems().findIndex(item => item.id === product.id);
 
    if (existingItemIndex !== -1) {
      // If the product already exists, update its quantity

     this.cartItems.update((items)=>items.map((item)=>
     item.id === product.id ? {...item, qty: item.qty+1} : item))

    } else {
      // If the product doesn't exist, add it to cartItems with quantity 1
      this.cartItems.update((data)=>[...data,{
        id: product.id,
        qty: 1,
        price:product.price,
        name:product.title,
        img:product.images[0] || product.thumbnail
      }]);
      
    }
  }

  removeFromCart(product:Product){

    const existingItemIndex = this.cartItems().findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      if (this.cartItems()[existingItemIndex].qty > 1) {

        this.cartItems.update((items)=>items.map((item)=>
        item.id===product.id ? {...item, qty: item.qty-1} : item))
      } else {
       this.cartItems.update((items)=>items.filter((item)=>item.id !==  this.cartItems()[existingItemIndex].id))
     }
    }
  
  }

   

  
  emptyCart(){
     this.cartItems.set([])

     if(this.cartItems().length === 0){
      this.router.navigateByUrl(''); 
      }

  }

}
