import { MoviesService } from './../shared/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { IMovie } from '../shared/interfaces/IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  popularMovies: Array<IMovie>;
  topRatedMovies: Array<IMovie>;

  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.service.getPopularMovies().subscribe(mov => {
      this.popularMovies = mov['results'].slice(0,6);
    });

    this.service.getTopRatedtMovies().subscribe(mov => {
      this.topRatedMovies = mov['results'].slice(0,6);
    });
  }
}
