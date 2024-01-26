import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SaudationComponent } from '../../components/saudation/saudation.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, SaudationComponent]
})
export class HomeComponent {

}
