import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import jsonData from '../../../assets/movies.json';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-personal-informations',
  standalone: true,
  imports: [CommonModule, MatCommonModule, MatIconModule],
  templateUrl: './personal-informations.component.html',
  styleUrl: './personal-informations.component.scss'
})
export class PersonalInformationsComponent {
  id = '';
  data_title = jsonData.title;
  data = jsonData.name;
  actor: any;
  trailerUrl: any;
  actorimage: any;
  constructor(private activeatedRoute: ActivatedRoute, private sanitizer: DomSanitizer, private _location: Location) { }

  ngOnInit() {
    this.id = this.activeatedRoute.snapshot.paramMap.get('id') || '';
    console.log(this.id);
    this.actor = jsonData.name.find((actor) => actor.id == this.id);
    console.log(this.data);
    console.log(this.actor.image);
    console.log(this.actor.video.url);
    
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.actor.video.url);

  }

  backClicked() {
    this._location.back();

  }
}

