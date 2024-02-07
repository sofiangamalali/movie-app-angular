import { Component, Input, OnInit } from '@angular/core';
import { RequestapiService } from '../services/requestapi.service';
import { DetailsDetailsComponent } from '../details-details/details-details.component';
import { DetailsRecomindComponent } from '../details-recomind/details-recomind.component';
import { Genre, Movie } from '../interfaces/movie';
import { ActivatedRoute } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [DetailsDetailsComponent, DetailsRecomindComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;
  recomindedmovies: any;
  genre?: number;
  @Input() id: number = -1;
  myrecomind?: Movie[];
  isHeartFilled!: boolean;

  constructor(
    private getmoviedetailsService: RequestapiService,private wishListService: WishlistService,
    private getrecomindService: RequestapiService, private activatedroute:ActivatedRoute
  ) {}

  ngOnInit() {
    this.isHeartFilled = this.wishListService.isMovieInWishList(this.movie);

    this.activatedroute.params.subscribe(params => {
      this.id = params['id'];
      // console.log(this.id);
      this.scrolltotop()
      this.implement(params['id'])
    })
   
  }

  implement(id: number) { 
    this.getmoviedetailsService.getmoviedetails(id).subscribe(
      (data) => {
        // console.log(data);
        this.movie = data as Movie;
        // console.log(this.movie);

        if (this.movie['genres'] && this.movie['genres'].length > 0) {

          if(this.movie['genres'][0]['id']==36 ){
            this.genre = 10750;
          }
          else if(this.movie['genres'][0]['id']==37 ){
            this.genre = 9648;
          }
          else if(this.movie['genres'][0]['id']==16 ){
            this.genre = 35;
          }
          else{
            this.genre = this.movie['genres'][0]['id'];
          }

          this.getrecomindService.getmovierecomind(this.genre).subscribe(
            (recdata) => {
              // console.log(this.genre);
              // console.log(recdata);
              this.recomindedmovies = recdata;
              // console.log(this.recomindedmovies);
              this.myrecomind = this.recomindedmovies.results;
              // console.log(this.myrecomind);
            }
          );
        } else {
          this.genre = 33;
          this.getrecomindService.getmovierecomind(this.genre).subscribe(
            (recdata) => {
              this.recomindedmovies = recdata;
              this.myrecomind = this.recomindedmovies.results;
              // console.log(this.myrecomind);
            }
          );        }
      }
    );
  }

  scrolltotop(){
    document.documentElement.scrollTop = 0;
  }
}
