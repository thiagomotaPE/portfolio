import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HardSkillComponent } from '../hard-skills/hard-skill.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, HardSkillComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent implements OnInit {
  constructor(){ return this;}
  
  @Input() details!: any;
  skills: any = []

  ngOnInit(): void {
    this.skills = this.details.tecnologies
    console.log(this.skills)
  }
}
