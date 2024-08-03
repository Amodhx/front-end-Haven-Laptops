import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-text',
  standalone: true,
  imports: [],
  templateUrl: './home-text.component.html',
  styleUrl: './home-text.component.css'
})
export class HomeTextComponent {
  value:String = "";  
  constructor(private router: Router){}



  navigateToHome(){
    this.router.navigate(['/Home']);
  }

  navigateToSignIn(){
    this.router.navigate(['/SignIn']);
  }
  
}

// TypeScript code
document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('typing-Text');
  if (!textElement) return;

  const textToType = "your Dreams !";
  let index = 0;

  function typeWriter() {
      if (index < textToType.length) {
        if(textElement != null){
          textElement.innerHTML += textToType.charAt(index);
          index++;
          setTimeout(typeWriter, 100); // Adjust the typing speed (milliseconds)
        }
      }
  }

  typeWriter();
});


