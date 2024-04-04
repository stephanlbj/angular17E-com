import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CartItemServiceService } from '../../services/cart-item-service.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { cartItem, stripeObjectType } from '../../../types';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { StripeServiceService } from '../../services/stripe-service.service';
import { loadStripe } from '@stripe/stripe-js';
import { DataViewModule } from 'primeng/dataview';
import { Subscription } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';
import { UserService } from '../../services/user.service';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, DataViewModule, ButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

 
  private stripeSubscription!: Subscription ;
  cartList : cartItem[] = []
  receivedUser: SocialUser |  null = null;


   

  constructor(
    private cartService: CartItemServiceService, 
    private router : Router,
    private stripeService:StripeServiceService,
    private userService: UserService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private localStorageService: LocalStorageService) { }



  async ngOnInit() {
    this.cartList =  this.cartService.cartItems()

    if(this.cartList.length == 0){
    this.router.navigateByUrl('')
    return
    }

    if(this.userService.getUser()!=undefined){
      this.receivedUser = this.userService.getUser() 
    }

    
    if (isPlatformBrowser(this.platformId)) {
      if(this.localStorageService.getData('user')!=undefined){
   
        if(this.receivedUser==null)
        this.receivedUser = this.localStorageService.getData('user')!
          this.userService.setUser(this.localStorageService.getData('user')!)
         return
      }
    }


    if(this.cartList.length=== 0){
      this.router.navigateByUrl('')
      return
    }
  }
  
  getCartLength(){
    return this.cartService.cartItems().length
  }

  getPricePerItem(item: cartItem): number {
    return item.price * item.qty;
  }


  checkOut(){
     if(this.receivedUser == null){
     this.router.navigateByUrl('login')
     return
   }


  
     this.stripeSubscription = this.stripeService.checkout(this.cartList)
     .subscribe(async (res)=>{

       const result = res as stripeObjectType
        let stripe = await loadStripe(environment.stripe_key);
        stripe?.redirectToCheckout({
         sessionId: result.id
        })
     }, (err)=>{
      console.log(err)
     })
  

  }


  goBack(){
    this.router.navigateByUrl('')
  }
  
       ngOnDestroy(){
        if(this.stripeSubscription){
          this.stripeSubscription.unsubscribe()
        }
     }
  
}
