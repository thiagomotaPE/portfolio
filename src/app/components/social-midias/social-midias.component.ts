import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-midias',
  standalone: true,
  imports: [],
  templateUrl: './social-midias.component.html',
  styleUrl: './social-midias.component.css'
})
export class SocialMidiasComponent {
  @Input() icons!: string[];
}
