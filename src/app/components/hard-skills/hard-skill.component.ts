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
  @Input() skills: any[] = [
    {name: "Nest.Js"},
    {name: "Angular"},
    {name: "Typescript"},
    {name: "Javascript"},
    {name: "React.Js"},
    {name: "SpringBoot"},
    {name: "Java"},
    {name: "MySql"},
    {name: "SQLite"},
    {name: "Git"},
    {name: "Docker"},
    {name: "Insomnia"},
    {name: "Figma"},
  ];
}
