import { Injectable } from '@angular/core';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root',
})

export class NewProductService {
  newProducts: Product[] = [];

  constructor() {}

  createNewProduct(product: any) {
    let newProduct: Product;
    const currentlyID = products.length + this.newProducts.length + 1;

    newProduct = {
      id: currentlyID,
      name: product.productname,
      description: product.productdescription,
      price: product.productprice,
      imageURL: product.producturl,
    };

    this.newProducts.push(newProduct);
    alert('O produto foi cadastrado corretamente. ');
  }

  getNewProducts() {
    return this.newProducts;
  }
}
