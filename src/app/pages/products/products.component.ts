import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProductCardComponent } from './product-card/product-card.component';
import { PRODUCTS } from '../db/db';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent,ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = PRODUCTS;
}
