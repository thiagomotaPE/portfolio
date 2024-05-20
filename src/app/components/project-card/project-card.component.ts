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
  @Input() details!: any;
  @Input() texts: any;
  skills: any = []
  constructor(){ return this;}

  ngOnInit(): void {
    this.skills = this.details.tecnologies
  }
}
