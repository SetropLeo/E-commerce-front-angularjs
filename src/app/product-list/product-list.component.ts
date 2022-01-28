import { Component } from '@angular/core';

import { products } from '../products';
import { NewProductService } from '../new-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  constructor(private NewProductService: NewProductService) {}

  share() {
    window.alert('O produto foi compartilhado!');
  }

  onNotify() {
    window.alert('Você será notificado quando o produto estiver disponivel!');
  }

  newProducts = this.NewProductService.getNewProducts();
}
