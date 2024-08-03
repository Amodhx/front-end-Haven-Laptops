import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-image',
  standalone: true,
  imports: [],
  templateUrl: './home-image.component.html',
  styleUrl: './home-image.component.css'
})
export class HomeImageComponent {
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
      ? 'homeimg-small.png'
      : 'homeimg-large.png';
  }
}
