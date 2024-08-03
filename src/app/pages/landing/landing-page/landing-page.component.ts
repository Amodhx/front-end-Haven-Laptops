import { Component, HostListener } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import 'animate.css';
import { HomeTextComponent } from '../home-text/home-text.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LogoComponent,HomeTextComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  imagePath = "";

  ngOnInit(): void {
    this.updateImageSrc();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateImageSrc();
  }

  updateImageSrc(): void {
    this.imagePath = window.innerWidth <= 600
      ? 'landing-azus-background-small.png'
      : 'landing-azus-background.png';
  }

}
