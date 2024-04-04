import { Component, EventEmitter, Input, Output, inject, input } from '@angular/core';
 
@Component({
  selector: 'app-checkout-btn',
  standalone: true,
  imports: [],
  templateUrl: './checkout-btn.component.html',
  styleUrl: './checkout-btn.component.css'
})
export class CheckoutBtnComponent {

  @Input() label: string = '';
  @Input() color: string = '';
  @Input() onClickFunction: () => void = () => {};
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();


 

  onClick() {
    this.clickEvent.emit();
  }
}
