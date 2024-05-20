import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-language-button',
  standalone: true,
  imports: [],
  templateUrl: './language-button.component.html',
  styleUrl: './language-button.component.css'
})
export class LanguageButtonComponent {
  constructor(private dataService: DataService) {}

  language: string = 'pt-br'

  changeLanguage() {
    if(this.language == 'pt-br') {
      this.language = 'en-us';
      this.dataService.setLanguage(this.language);
    } else {
      this.language = 'pt-br';
      this.dataService.setLanguage(this.language);
    }
  }
}
