import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import 'animate.css';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
