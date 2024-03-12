import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import jsonDataMovie from '../../../assets/movies.json';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MatCommonModule, MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  movies = jsonDataMovie.title;
  actors = jsonDataMovie.name;
  constructor(){
    console.log(this.movies);
    console.log(this.actors);
    
  }
}
