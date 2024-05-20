import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule, 
    HttpClientModule, 
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  texts: any = {};
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.texts$.subscribe(response => {
      this.texts = response.header;
    });
  }
}
