import { Component,Input } from '@angular/core';
import { RequestapiService } from '../services/requestapi.service';
import { Movie } from '../interfaces/movie';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-recomind',
  standalone: true,
  imports: [CommonModule,MatProgressSpinnerModule,NgbProgressbarModule],
  templateUrl: './details-recomind.component.html',
  styleUrl: './details-recomind.component.css'
})
export class DetailsRecomindComponent {
  isHeartFilled = true;

  @Input() movie: any;

  constructor(private router:Router){}
  details(id:number){
    this.router.navigate([`movie-details/${id}`]);
  }

  toggleHeart() {
    this.isHeartFilled = !this.isHeartFilled;
  }
  

  
}
