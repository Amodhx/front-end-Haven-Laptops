import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeImageComponent } from './home-image/home-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,HomeImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
