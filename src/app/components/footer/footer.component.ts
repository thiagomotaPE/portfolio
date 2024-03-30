import { Component, Input } from '@angular/core';
import { SocialMidiasComponent } from '../social-midias/social-midias.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMidiasComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() copyright: string = "Copyright 2024 © Thiago Mota";
}
