import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  items = this.cartService.getCartItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

  onSubmit(): void {
    this.items = this.cartService.clearCartItems();
    console.warn('Seu pedido foi enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
