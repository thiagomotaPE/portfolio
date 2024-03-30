import { Component, Input, OnInit } from '@angular/core';
import { HardSkillComponent } from '../hard-skills/hard-skill.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, HardSkillComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  constructor(){ return this;}

  @Input() details!: any;
  skills: any[] = [
    {name: "Nest.Js"},
    {name: "Angular"},
    {name: "Typescript"},
    {name: "MySql"},
    {name: "Git"},
    {name: "Docker"},
    {name: "Insomnia"},
  ]
}
