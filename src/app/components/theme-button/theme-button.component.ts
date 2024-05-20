import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.scss'
})
export class ThemeButtonComponent {
  @Input() title!: string;
  public toggleTheme() {
    const theme = document.body.classList.toggle('light-theme');
  }
}
