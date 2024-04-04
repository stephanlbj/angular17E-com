import { Component, Input } from '@angular/core';
import { Product } from '../../../types';
import { BtnComponentComponent } from '../btn-component/btn-component.component';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [BtnComponentComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  @Input() product!:Product

 
}
