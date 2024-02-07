import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestapiService {

  api_key = "7fdb7be812e267b304a317210bb859e6";

  constructor(private http: HttpClient) { }

  getpopularmovies(): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&page=1`);
    }
  getpopularmoviess(): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&page=2`);
    }
  getpopularmoviesss(): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&page=3`);
    }

    getmoviedetails(id:number) { 
      return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}`);
    }

    getmovierecomind(id: number)
    {
      return this.http.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.api_key}`);

    }

  searchMovie(movieName: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${movieName}`);
  }
}