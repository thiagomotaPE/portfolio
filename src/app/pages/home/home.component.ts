import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
export class HomeComponent {
    isWorkExperience: boolean = true;
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
    projectDetails: any[] = [
        {
            id: 1,
            name: 'Portfolio',
            link: 'https://github.com/thiagomotaPE/portfolio',
            repository: 'https://github.com/thiagomotaPE/portfolio',
            tecnologies: [
                {name: "Angular"},
                {name: "Typescript"},
                {name: "Sass"},
                {name: "Git"},
            ]
        },
        {
            id: 2,
            name: 'Polls',
            link: 'https://github.com/thiagomotaPE/polls',
            repository: 'https://github.com/thiagomotaPE/polls',
            skills: [
                {name: "Node.js"},
                {name: "Fastify"},
                {name: "Typescript"},
                {name: "Api rest"},
                {name: "WebSockets"},
                {name: "PrismaORM"},
                {name: "PostgreSql"},
                {name: "Redis"},
                {name: "Docker"},
                {name: "Insomnia"},
                {name: "Git"},
            ]
        },
        {
            id: 3,
            name: 'Mario run',
            link: 'https://github.com/thiagomotaPE/MarioRun-Desktop',
            repository: 'https://github.com/thiagomotaPE/MarioRun-Desktop',
            skills: [
                {name: "Electron.js"},
                {name: "Javascript"},
                {name: "Html"},
                {name: "Css"},,
            ]
        },
        {
            id: 4,
            name: 'Cats',
            link: 'https://github.com/thiagomotaPE/cats',
            repository: 'https://github.com/thiagomotaPE/cats',
            skills: [
                {name: "Angular"},
                {name: "Nest.Js"},
                {name: "Typescript"},
                {name: "TypeORM"},
                {name: "SQlite"},
                {name: "Jwt"},
                {name: "Git"},
                {name: "Docker"},
                {name: "Insomnia"},
            ]
        },
        {
            id: 5,
            name: 'Crud - Springboot Java',
            link: 'https://github.com/thiagomotaPE/CRUD-JavaSpring',
            repository: 'https://github.com/thiagomotaPE/CRUD-JavaSpring',
            tecnologies: [
                {name: "SpringBoot"},
                {name: "Java"},
                {name: "Api Rest"},
                {name: "Migrations"},
                {name: "JPA"},
                {name: "PostgreSql"},
                {name: "Insomnia"},
                {name: "Git"},
            ]
        },
        {
            id: 6,
            name: 'Cardapio web',
            link: 'https://github.com/thiagomotaPE/cardapioWebApp',
            repository: 'https://github.com/thiagomotaPE/cardapioWebApp',
            skills: [
                {name: "React.js"},
                {name: "Typescript"},
                {name: "SpringBoot"},
                {name: "Java"},
                {name: "Api Rest"},
                {name: "Migrations"},
                {name: "JPA"},
                {name: "PostgreSql"},
                {name: "Git"},
                {name: "Insomnia"},
            ]
        },
        {
            id: 7,
            name: 'ResidentEvil 2D',
            link: 'https://github.com/thiagomotaPE/ResidentEvil2D',
            repository: 'https://github.com/thiagomotaPE/ResidentEvil2D',
            skills: [
                {name: "Java"},
                {name: "Logica de programação"},
            ]
        },
        {
            id: 8,
            name: 'Extreme gym',
            link: 'https://extreme-gym.vercel.app/',
            repository: 'https://github.com/thiagomotaPE/Extreme-Gym',
            skills: [
                {name: "React.js"},
                {name: "Styled-components"},
                {name: "Framer motion"},
                {name: "Typescript"},
                {name: "Mobile first"},
                {name: "Git"},
            ]
        },
        {
            id: 9,
            name: 'Pong mini game',
            link: 'https://github.com/thiagomotaPE/Pong-miniGame',
            repository: 'https://github.com/thiagomotaPE/Pong-miniGame',
            tecnologies: [
                {name: "Java"},
                {name: "Logica de programação"},
            ]
        },
        {
            id: 10,
            name: 'Calculadora',
            link: 'https://github.com/thiagomotaPE/Calculadora-ReactJs',
            repository: 'https://github.com/thiagomotaPE/Calculadora-ReactJs',
            skills: [
                {name: "React.js"},
                {name: "Styled-components"},
                {name: "Typescript"},
                {name: "Git"},
            ]
        },
        {
            id: 11,
            name: 'Projeto android',
            link: 'https://thiagomotape.github.io/projeto-android/',
            repository: 'https://github.com/thiagomotaPE/projeto-android',
            skills: [
                {name: "Html"},
                {name: "Css"},
                {name: "Responsividade"},
                {name: "Git"},
            ]
        },
    ]
    workExperienceDetails: any[] = [
        {
            id: 1,
            name: 'Estagio em desenvolvimento web',
            link: 'https://www.linkedin.com/feed/',
            companyName: 'Techno Ok',
            inicialDate: '01/12/2023',
            finalDate: 'presente',
            tecnologies: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
            ]
        },
        {
            id: 2,
            name: 'Estagio em desenvolvimento RPA',
            link: 'https://www.linkedin.com/feed/',
            companyName: 'Rede Damas Educacional',
            inicialDate: '02/05/2023',
            finalDate: '31/11/2023',
            tecnologies: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
            ]
        },
        {
            id: 3,
            name: 'Atendente de Loja',
            link: 'https://www.linkedin.com/feed/',
            companyName: 'Nene Mota doces e salgados',
            inicialDate: '01/12/2023',
            finalDate: '01/12/2023',
            tecnologies: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
            ]
        },
    ]
    coursesExperienceDetails: any[] = [
        {
            id: 1,
            name: 'Nitro',
            link: 'https://www.linkedin.com/feed/',
            companyName: 'Escola Congenial',
            inicialDate: '09/2023',
            finalDate: 'presente',
            tecnologies: [
                {name: "Logica de programação"},
                {name: "Algoritmos"},
                {name: "Estrutura de dados"},,
            ]
        },
        {
            id: 2,
            name: 'NWl Expert trilha de Node.js',
            link: 'https://app.rocketseat.com.br/certificates/bd410e8a-c837-47f7-8c6c-f1673c230e33',
            companyName: 'Rocketseat',
            inicialDate: '02/2024',
            finalDate: '02/2024',
            tecnologies: [
                {name: "Nest.Js"},
                {name: "Angular"},
                {name: "Typescript"},,
            ]
        },
        {
            id: 3,
            name: 'Desenvolvimento frontend com Angular',
            link: 'https://www.dio.me/certificate/AE330857/share',
            companyName: 'Dio',
            inicialDate: '12/2023',
            finalDate: '12/2023',
            tecnologies: [
                {name: "Angular"},
                {name: "Typescript"},,
            ]
        },
    ]

    toggleExperience(isWorkExperience: boolean) {
        this.isWorkExperience = isWorkExperience;
    }
}
