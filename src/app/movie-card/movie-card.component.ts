import { Movie } from '../interfaces/movie';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../services/wishlist.service';
import { Router } from '@angular/router';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule,NgbProgressbarModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  isHeartFilled!: boolean;

  @Input() movie!: Movie;

  constructor(private wishListService: WishlistService,private router: Router) {
   }
  ngOnInit() {
    this.isHeartFilled = this.wishListService.isMovieInWishList(this.movie);
  }
  toggleHeart() {
    if (this.isHeartFilled) {
      this.wishListService.removeMovieFromWishList(this.movie);
    } else {
      this.wishListService.addMovieToWishList(this.movie);
    }
    this.isHeartFilled = !this.isHeartFilled;
  }

  details(id: number) {
    this.router.navigate([`movie-details/${id}`]);
  }
}