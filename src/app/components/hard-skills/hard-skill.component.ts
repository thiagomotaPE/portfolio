import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hard-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hard-skill.component.html',
  styleUrl: './hard-skill.component.css'
})
export class HardSkillComponent {
  @Input() skills!: any[];
  @Input() size!: string;
}
