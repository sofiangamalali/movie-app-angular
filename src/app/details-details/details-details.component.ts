import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-details-details',
  standalone: true,
  imports: [CommonModule, NgbRatingModule],
  templateUrl: './details-details.component.html',
  styleUrl: './details-details.component.css'
})
export class DetailsDetailsComponent {

  isHeartFilled!: boolean;
@Input() movie!: Movie;
@Input() iHeartFilled?:boolean;


ngOnInit() {
  this.isHeartFilled = this.wishListService.isMovieInWishList(this.movie);
}
constructor(private wishListService: WishlistService) {
}
toggleHeart() {
  if (this.isHeartFilled) {
    this.wishListService.removeMovieFromWishList(this.movie);
  } else {
    this.wishListService.addMovieToWishList(this.movie);
  }
  this.isHeartFilled = !this.isHeartFilled;
}


 
}
