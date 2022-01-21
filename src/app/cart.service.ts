import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
    window.alert('O produto foi adicionado ao carrinho!');
    return this.items;
  }

  getCartItems() {
    return this.items;
  }

  removeItem(index: number) {
    window.alert('O produto foi removido do carrinho!');
    this.items.splice(index, 1)
    return this.items;
  }

  clearCartItems() {
    this.items = [];
    window.alert('Compra realizada e carrinho esvaziado!');
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
