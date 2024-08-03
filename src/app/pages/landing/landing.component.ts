import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandingPageComponent,FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
