import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { SaudationComponent } from '../../components/saudation/saudation.component';
import { RouterModule } from '@angular/router';
import { SocialMidiasComponent } from '../../components/social-midias/social-midias.component';
import { ButtonComponent } from '../../components/button/button.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PhotoComponent } from '../../components/photo/photo.component';
import { ResumeComponent } from '../../components/resume/resume.component';
import { HardSkillComponent } from '../../components/hard-skills/hard-skill.component';
import { OptionsWindowComponent } from '../../components/options-window/options-window.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { LoadComponent } from '../../components/load/load.component';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
import * as data from '../../../database/data.json';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        RouterModule,
        LoadComponent,
        SaudationComponent, 
        SocialMidiasComponent, 
        ButtonComponent, 
        AvatarComponent, 
        FooterComponent,
        PhotoComponent,
        ResumeComponent,
        HardSkillComponent,
        OptionsWindowComponent,
        ProjectCardComponent,
        ExperienceCardComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],//swiper
})
export class HomeComponent implements OnInit {
    isWorkExperience: boolean = true;
    mySkills!: any;
    projectDetails!: any;
    workExperienceDetails!: any;
    coursesExperienceDetails!: any;

    toggleExperience(isWorkExperience: boolean) {
        this.isWorkExperience = isWorkExperience;
    }
    ngOnInit(): void {
        this.mySkills = data.skills;
        this.projectDetails = data.projects;
        this.workExperienceDetails = data.workExperiences;
        this.coursesExperienceDetails = data.coursesExperiences;
    }
}
