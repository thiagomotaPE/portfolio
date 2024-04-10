import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
