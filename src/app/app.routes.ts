import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchListComponent } from './search-list/search-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
    {
        path:"",
        component: MovieListComponent,
        title:"Movie"
    },{
        path:"search/:searchKey",
        component:SearchListComponent,
        title:"Search"
    },
    {
        path:"wishlist",
        component:WishlistComponent,
        title:"Wishlist"
    },
    {
        path:"movie-details/:id",
        component: MovieDetailsComponent,
        title:"Movie Details"
    },
    { path: '**', component: NotFoundComponent, title:"Not Found"},
];