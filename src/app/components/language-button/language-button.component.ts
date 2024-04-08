import { Component } from '@angular/core';

@Component({
  selector: 'app-language-button',
  standalone: true,
  imports: [],
  templateUrl: './language-button.component.html',
  styleUrl: './language-button.component.css'
})
export class LanguageButtonComponent {
  language: string = 'PT-BR'

  changeLanguage() {
    if(this.language == 'PT-BR') {
      this.language = 'EN';
    } else {
      this.language = 'PT-BR';
    }
  }


}
