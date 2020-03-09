import { IMovie } from './../../shared/interfaces/IMovie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input('movie') movie: IMovie;

  constructor() { }

  ngOnInit() {
    this.movie['posterPath'] = 'https://image.tmdb.org/t/p/w500' + this.movie['poster_path']
  }

}
