import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hard-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hard-skill.component.html',
  styleUrl: './hard-skill.component.scss'
})
export class HardSkillComponent {
  constructor() {
    return this;
  }
  @Input() skills!: any[];
  @Input() size!: string;
}
