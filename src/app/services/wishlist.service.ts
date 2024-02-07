import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishList: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  private counterOfWishList: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  addMovieToWishList(movie: Movie) {
    const currentWishList = this.wishList.value;
    const newWishList = [...currentWishList, movie];
    this.wishList.next(newWishList);
    const newCounter = newWishList.length;
    this.counterOfWishList.next(newCounter);
  }
  removeMovieFromWishList(movie: Movie) {
    const currentWishList = this.wishList.value;
    const newWishList = currentWishList.filter((item) => item !== movie);
    this.wishList.next(newWishList);
    const newCounter = newWishList.length;
    this.counterOfWishList.next(newCounter);
  }
  getWishList() {
    return this.wishList.asObservable();
  }
  getWishListCounter() {
    return this.counterOfWishList.asObservable();
  }
  isMovieInWishList(movie: Movie) {
    return this.wishList.value.includes(movie);
  }
}
