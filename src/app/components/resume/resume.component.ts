import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  @Input() title: string = "Qual é a minha missão?";
  @Input() catchphrase: string = "impactar positivamente a vida das pessoas através da tecnologia";
}
