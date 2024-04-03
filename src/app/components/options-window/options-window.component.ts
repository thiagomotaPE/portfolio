import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-options-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-window.component.html',
  styleUrl: './options-window.component.scss'
})
export class OptionsWindowComponent {
  @Input() title!: string;
  @Input() option1!: string;
  @Input() option2!: string;
  @Output() optionSelected = new EventEmitter<boolean>();
  
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  selectOption(option: string) {
    const isWorkExperience = option === 'work';
    this.optionSelected.emit(isWorkExperience);
  }
}
