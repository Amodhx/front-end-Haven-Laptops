import { Component, Input, input } from '@angular/core';
import { categoriesModel } from '../../Model/categoriesModel';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input()
 category?:categoriesModel;
}
