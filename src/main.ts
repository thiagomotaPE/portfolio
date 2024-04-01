import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/config/app.config';
import { AppComponent } from './app/app.component';
//swiper
import {
  register as registerSwiperElements
} from 'swiper/element/bundle';

registerSwiperElements();//swiper
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
