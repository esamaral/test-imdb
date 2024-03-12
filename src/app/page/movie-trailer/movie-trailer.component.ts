import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import jsonData from '../../../assets/movies.json';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-trailer',
  standalone: true,
  imports: [MatCommonModule, CommonModule, MatIconModule],
  templateUrl: './movie-trailer.component.html',
  styleUrl: './movie-trailer.component.scss'
})
export class MovieTrailerComponent {
  id = '';
  data = jsonData.title;
  title: any;
  trailerUrl!: SafeResourceUrl;
  image: any;
  constructor(private activeatedRoute: ActivatedRoute, private sanitizer: DomSanitizer, private _location: Location) {
    console.log(this.data);
  }
  
  ngOnInit() {
    this.id = this.activeatedRoute.snapshot.paramMap.get('id') || '';
    console.log(this.id);
    this.title = jsonData.title.find((title) => title.id == this.id);
    console.log(this.title);
    console.log(this.title.image);
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.title.trailer.url);
    console.log(this.trailerUrl);
    console.log(this.title.d);
    
  }
    
  backClicked() {
    this._location.back();
    
  }

}
