import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-browse-categories',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './browse-categories.component.html',
  styleUrl: './browse-categories.component.css'
})
export class BrowseCategoriesComponent {

}
