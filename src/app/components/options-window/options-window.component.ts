import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-options-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-window.component.html',
  styleUrl: './options-window.component.css'
})
export class OptionsWindowComponent {
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
