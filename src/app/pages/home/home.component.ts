import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { SaudationComponent } from '../../components/saudation/saudation.component';
import { RouterModule } from '@angular/router';
import { SocialMidiasComponent } from '../../components/social-midias/social-midias.component';
import { ButtonComponent } from '../../components/button/button.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ResumeComponent } from '../../components/resume/resume.component';
import { HardSkillComponent } from '../../components/hard-skills/hard-skill.component';
import { OptionsWindowComponent } from '../../components/options-window/options-window.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { LoadComponent } from '../../components/load/load.component';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
import { DataService } from '../../services/data/data.service';
import { Subscription } from 'rxjs';

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
        ResumeComponent,
        HardSkillComponent,
        OptionsWindowComponent,
        ProjectCardComponent,
        ExperienceCardComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],//swiper
})
export class HomeComponent implements OnInit, OnDestroy {
    texts: any;
    isWorkExperience: boolean = true;
    mySkills!: any;
    projectDetails!: any;
    workExperienceDetails!: any;
    coursesExperienceDetails!: any;
    private subscription: Subscription = new Subscription();

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.mySkills = this.dataService.mySkills;
        this.projectDetails = this.dataService.projectDetails;
        this.workExperienceDetails = this.dataService.workExperienceDetails;
        this.coursesExperienceDetails = this.dataService.coursesExperienceDetails;
        this.subscription = this.dataService.texts$.subscribe(texts => {
            this.texts = texts;
        });
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    toggleExperience(isWorkExperience: boolean) {
        this.isWorkExperience = isWorkExperience;
    }
}
