import { Component } from '@angular/core';
import { SaudationComponent } from '../../components/saudation/saudation.component';
import { RouterModule } from '@angular/router';
import { SocialMidiasComponent } from '../../components/social-midias/social-midias.component';
import { ButtonComponent } from '../../components/button/button.component';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, SaudationComponent, SocialMidiasComponent, ButtonComponent, AvatarComponent]
})
export class HomeComponent {

}
