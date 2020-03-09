import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';

const API_KEY: string = '?api_key=4273a2743e5c93149c5d6cae7e9eda42';
const BASE_URL: string = 'https://api.themoviedb.org/3/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(BASE_URL + '/popular' + API_KEY + '&page=1');
  }

  getTopRatedtMovies(): Observable<Array<IMovie>>{
    return this.http.get<Array<IMovie>>(BASE_URL + '/top_rated' + API_KEY);
  }

}
