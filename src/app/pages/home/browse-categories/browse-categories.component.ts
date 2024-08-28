import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BROWS_CATEGORIES } from '../../db/db';

@Component({
  selector: 'app-browse-categories',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './browse-categories.component.html',
  styleUrl: './browse-categories.component.css'
})
export class BrowseCategoriesComponent {

  cards = BROWS_CATEGORIES;

}
