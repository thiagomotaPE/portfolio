import { Component, OnInit } from '@angular/core';
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
    icons: string[] = [
        "fa-brands fa-linkedin",
        "fa-brands fa-square-github",
        "fa-brands fa-dev",
        "fa-brands fa-square-instagram",
    ]
}
