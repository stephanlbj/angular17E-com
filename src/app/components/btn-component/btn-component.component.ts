import { Component, Input, Output } from '@angular/core';
import { Product, cartItem } from '../../../types';
import { EventEmitter } from 'stream';
import { CartItemServiceService } from '../../services/cart-item-service.service';

@Component({
  selector: 'app-btn-component',
  standalone: true,
  imports: [],
  templateUrl: './btn-component.component.html',
  styleUrl: './btn-component.component.css'
})
export class BtnComponentComponent {

  
  constructor(private cartService: CartItemServiceService){}

  
  @Input() product!:Product
  

  getQuantity(product: Product): number {
  return this.cartService.getQuantity(product)
  }

 decrease(product:Product) {
  return this.cartService.removeFromCart(product)
}
 
increase(product: Product) {
  
return this.cartService.addToCart(product)
}


}