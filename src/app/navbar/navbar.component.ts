import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  wishlistCounter!: number;
  constructor(private wishListService: WishlistService) {}
  ngOnInit() {
    this.wishListService.getWishListCounter().subscribe((value) => this.wishlistCounter = value);
  }
}
