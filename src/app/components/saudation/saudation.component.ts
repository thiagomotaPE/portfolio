import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saudation',
  standalone: true,
  imports: [],
  templateUrl: './saudation.component.html',
  styleUrl: './saudation.component.scss'
})
export class SaudationComponent {
  @Input() texts: any;
}
