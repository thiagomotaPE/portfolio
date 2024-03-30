import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HardSkillComponent } from '../hard-skills/hard-skill.component';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, HardSkillComponent],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  constructor(){ return this;}

  @Input() details!: any;
  skills: any[] = [
    {name: "Nest.Js"},
    {name: "Angular"},
    {name: "Typescript"},
  ]
}
