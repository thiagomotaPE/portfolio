import { Component } from '@angular/core';
import { SaudationComponent } from '../../components/saudation/saudation.component';
import { RouterModule } from '@angular/router';
import { SocialMidiasComponent } from '../../components/social-midias/social-midias.component';
import { ButtonComponent } from '../../components/button/button.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, SaudationComponent, SocialMidiasComponent, ButtonComponent, AvatarComponent, FooterComponent]
})
export class HomeComponent {
    icons: string[] = [
        "fa-brands fa-linkedin",
        "fa-brands fa-square-github",
        "fa-brands fa-dev",
        "fa-brands fa-square-instagram",
    ]

}
