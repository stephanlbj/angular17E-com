import { Component , Inject, PLATFORM_ID, computed, effect, inject, signal} from '@angular/core';
import { CartItemServiceService } from '../../services/cart-item-service.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
 import { Router, RouterModule } from '@angular/router';
import { SocialUser } from '@abacritt/angularx-social-login';
import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Subscription } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import { CheckoutBtnComponent } from '../checkout-btn/checkout-btn.component';
 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, CheckoutBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  receivedUser = signal<SocialUser |  null>(null)
  private authSubscription!: Subscription ;
  cartService = inject(CartItemServiceService)
  isCartVisible : boolean = false
 

  totalPrice = computed(()=>{
    return this.cartService.cartItems().reduce((acc, curr)=>{
     return acc + Number(curr.price * curr.qty)
    },0)
  })
  
   
  cartCount = computed(()=> {
  return  this.cartService.cartItems()
  .reduce((acc, curr)=> acc + curr.qty, 0)

  })
   
  constructor(
    private userService: UserService,
    private router :Router,
    private localStorageService: LocalStorageService,
    @Inject(PLATFORM_ID) private platformId: Object){

       
 }

    

    ngOnInit(){
    if (isPlatformBrowser(this.platformId)) {
        if(this.localStorageService.getData('user')!=undefined){
          this.receivedUser.set(this.localStorageService.getData('user'))
           return
        }
      }
      this.receivedUser.set(this.userService.getUser())  
    }

    showCart(){
      this.isCartVisible = !this.isCartVisible
    }

    viewCart() {
    
      this.router.navigateByUrl('cart')
      this.isCartVisible = !this.isCartVisible
      
    }

   

    //Runs when the component is unmount
    ngOnDestroy(){
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
   }

  }

 
  

