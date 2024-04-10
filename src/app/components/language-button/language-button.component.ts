import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-button',
  standalone: true,
  imports: [],
  templateUrl: './language-button.component.html',
  styleUrl: './language-button.component.css'
})
export class LanguageButtonComponent {
  constructor(private languageService: LanguageService) {}

  language: string = 'PT-BR'

  changeLanguage() {
    if(this.language == 'PT-BR') {
      this.language = 'EN';
      this.languageService.switchLanguage('en');
    } else {
      this.language = 'PT-BR';
      this.languageService.switchLanguage('pt');

    }
  }
}
