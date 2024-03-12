import { Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { MovieTrailerComponent } from './page/movie-trailer/movie-trailer.component';
import { PersonalInformationsComponent } from './page/personal-informations/personal-informations.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'tt/:id', component: MovieTrailerComponent },
    { path: 'actor/:id', component: PersonalInformationsComponent }
];
