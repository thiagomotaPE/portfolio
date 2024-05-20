import { Component, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeButtonComponent } from '../theme-button/theme-button.component';
import { CommonModule } from '@angular/common';
import { LanguageButtonComponent } from '../language-button/language-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeButtonComponent, LanguageButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() texts: any;
  isScrolled = false;
  selectedOption: number | null = null;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:any) {
    this.isScrolled = window.scrollY > 50;
  }

  selectOption(option: number) {
    this.selectedOption = option;
  }
}
