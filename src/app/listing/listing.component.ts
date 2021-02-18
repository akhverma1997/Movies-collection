import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesStoreService } from '../movies-store.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  MoviesStore : any;
  constructor(public moviesservice : MoviesStoreService, public router : Router) { }

  ngOnInit(): void {
    this.moviesservice.getMovies().subscribe((data: any) => {
      this.MoviesStore = data;
    })
  }

  confirm(movies : any) {
    this.moviesservice.setCurrentMovie(movies);
    this.router.navigate(['/confirmation']);
  }

}
