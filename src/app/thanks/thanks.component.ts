import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesStoreService } from '../movies-store.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  movies : any;

  constructor(public moviesservice : MoviesStoreService,public router : Router) { }

  ngOnInit(): void {
    this.movies = this.moviesservice.getCurrentMovie();
  }

}
