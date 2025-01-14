import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { BestProductsComponent } from './best-products/best-products.component';
import { BrowseCategoriesComponent } from './browse-categories/browse-categories.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HomeImageComponent, BestProductsComponent, BrowseCategoriesComponent, HomeBannerComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
