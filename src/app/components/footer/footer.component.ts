import { Component } from '@angular/core';
import { SocialMidiasComponent } from '../social-midias/social-midias.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMidiasComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  icons: string[] = [
    "fa-brands fa-linkedin-in",
    "fa-brands fa-github",
    "fa-brands fa-dev",
    "fa-solid fa-at",
  ]
}
