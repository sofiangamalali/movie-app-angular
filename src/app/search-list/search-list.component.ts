import { Component } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { RequestapiService } from '../services/requestapi.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.css'
})
export class SearchListComponent {
  movies?: Movie[];
  searchKey!: string;
  constructor(private movierequestService: RequestapiService, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.searchKey = params['searchKey'];
      this.serarch();

    })
  }
  serarch() {
    this.searchKey = this.activatedRoute.snapshot.params['searchKey'];
    this.movierequestService.searchMovie(this.searchKey).subscribe((response: any) => this.movies = response.results);
  }
}
