import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesStoreService } from '../movies-store.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  movies : any;
  constructor(public moviesservice : MoviesStoreService, public router : Router) {}

  ngOnInit(): void {
    this.movies = this.moviesservice.getCurrentMovie();
  }

  
}
