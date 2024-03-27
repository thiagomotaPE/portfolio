import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.css'
})
export class ThemeButtonComponent {
  public toggleTheme() {
    const theme = document.body.classList.toggle('light-theme');
  }
}
