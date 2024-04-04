import { Component, computed, inject , effect} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../types';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



 
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
     ProductComponent, CommonModule, MatProgressSpinnerModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  private productSubscription!: Subscription ;
  products : Product[] = []
  count: number = 0
  productService = inject(ProductsService)
  isLoading : boolean = true
 
 
 

   ngOnInit(){
    if(this.productService.getCachedProducts().length > 0){
      this.isLoading = false
      this.products = this.productService.getCachedProducts()
      return
    }

    this.productSubscription =  this.productService.getAllProducts()
    .subscribe( (products)=>{ 
      this.products = products  
      this.isLoading = false
    },
    (error)=>{
      console.log("An error occured."+error?.message)
      this.isLoading = false
    })
   }

   
   ngOnDestroy(){
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
   }

}
