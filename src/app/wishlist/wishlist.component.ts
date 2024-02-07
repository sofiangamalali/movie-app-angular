import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { WishlistService } from '../services/wishlist.service';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  movies!:Movie[];
  constructor(private wishListService: WishlistService) {

  }
  ngOnInit() {
    this.wishListService.getWishList().subscribe((value)=>this.movies=value);
  }
}
