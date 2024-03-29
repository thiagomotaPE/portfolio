import { Component } from '@angular/core';
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

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
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
        ProjectCardComponent
    ]
})
export class HomeComponent {
    mySkills: any[] = [
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
    ]

    RealprojectDetails: any[] = [
        {
            id: 1,
            name: 'Polls',
            link: 'https://www.linkedin.com/feed/',
            repository: 'https://github.com/thiagomotaPE/polls',
            tecnologies: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
                {name: "MySql"},
                {name: "Git"},
                {name: "Docker"},
                {name: "Insomnia"},
            ]
        },
        {
            id: 2,
            name: 'Extreme gym',
            link: 'https://www.linkedin.com/feed/',
            repository: 'https://github.com/thiagomotaPE/polls',
            skills: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
                {name: "MySql"},
                {name: "Git"},
                {name: "Docker"},
                {name: "Insomnia"},
            ]
        },
        {
            id: 3,
            name: 'Mario run',
            link: 'https://www.linkedin.com/feed/',
            repository: 'https://github.com/thiagomotaPE/polls',
            skills: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
                {name: "MySql"},
                {name: "Git"},
                {name: "Docker"},
                {name: "Insomnia"},
            ]
        },
        {
            id: 4,
            name: 'Portfolio',
            link: 'https://www.linkedin.com/feed/',
            repository: 'https://github.com/thiagomotaPE/polls',
            skills: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
                {name: "MySql"},
                {name: "Git"},
                {name: "Docker"},
                {name: "Insomnia"},
            ]
        },
    ];
    StudyprojectDetails: any[] = [
        {
            name: 'Projeto polls',
            link: 'https://www.linkedin.com/feed/',
            repository: 'https://github.com/thiagomotaPE/polls',
            skills: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
                {name: "MySql"},
                {name: "Git"},
                {name: "Docker"},
                {name: "Insomnia"},
            ]
        },
        {
            name: 'Projeto polls',
            link: 'https://www.linkedin.com/feed/',
            repository: 'https://github.com/thiagomotaPE/polls',
            skills: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
                {name: "MySql"},
                {name: "Git"},
                {name: "Docker"},
                {name: "Insomnia"},
            ]
        },
        {
            name: 'Projeto polls',
            link: 'https://www.linkedin.com/feed/',
            repository: 'https://github.com/thiagomotaPE/polls',
            skills: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
                {name: "MySql"},
                {name: "Git"},
                {name: "Docker"},
                {name: "Insomnia"},
            ]
        },
        {
            name: 'Projeto polls',
            link: 'https://www.linkedin.com/feed/',
            repository: 'https://github.com/thiagomotaPE/polls',
            skills: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
                {name: "MySql"},
                {name: "Git"},
                {name: "Docker"},
                {name: "Insomnia"},
            ]
        },
    ];

    WorkExperienceDetails!: any[]
    StudyExperienceDetails!: any[]




}
