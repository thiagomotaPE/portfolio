import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoadComponent } from '../components/load/load.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'load', component: LoadComponent},
];
