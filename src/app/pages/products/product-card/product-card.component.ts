import { Component, Input } from '@angular/core';
import { ProductModel } from '../../Model/ProductModel';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input()
  card?:ProductModel;
  

  constructor(){}

}
