import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-window.component.html',
  styleUrl: './options-window.component.css'
})
export class OptionsWindowComponent {
  @Input() title!: string;
  @Input() option1!: string;
  @Input() option2!: string;
  
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
