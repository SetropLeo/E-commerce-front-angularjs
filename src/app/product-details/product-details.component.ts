// Componentes e métodos do Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Componentes e serviços criados
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  product: Product | undefined;

  ngOnInit() {
    // Obter ProductID da Rota
    const paramsRoute = this.route.snapshot.paramMap;
    const productIdProvided = Number(paramsRoute.get('productId'));

    // Encontrar produto que corresponda com o Id provido da rota
    this.product = products.find((product) => product.id === productIdProvided);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
