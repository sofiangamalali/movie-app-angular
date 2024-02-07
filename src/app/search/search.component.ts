import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchKey!: string;
  constructor(private router: Router) { }
  goToSerachPage() {
    this.router.navigate(['/search', this.searchKey],);
  }
}
