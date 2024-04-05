import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HardSkillComponent } from '../hard-skills/hard-skill.component';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, HardSkillComponent],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent implements OnInit {
  constructor(){ return this;}

  @Input() details!: any;
  skills: any = []

  ngOnInit(): void {
    this.skills = this.details.tecnologies
  }
}
