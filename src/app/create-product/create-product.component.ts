import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { NewProductService } from '../new-product.service';
import { Product } from '../products';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})

export class CreateProductComponent {

  constructor(private NewProductService: NewProductService, private formBuilder: FormBuilder) {}

  createProductForm = this.formBuilder.group({
    productname: '',
    productdescription: '',
    productprice: '',
    producturl: '',
  });

  createNewProduct(product: Product) {
    this.NewProductService.createNewProduct(product);
  }
}
