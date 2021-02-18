import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesStoreService {

  movie : any;
  image : any;
  constructor(private httpClient : HttpClient) { }

  getMovies() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    this.movie = this.httpClient.get('http://localhost:3000/movies',{headers: httpHeaders});
    return this.movie;
  }

  getImages() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    this.movie = this.httpClient.get('http://localhost:3000/images',{headers: httpHeaders});
    return this.movie;
  }

  setCurrentMovie(moviename : any) {
    this.movie = moviename;
  }

  setCurrentImage(imagename : any) {
    this.image = imagename;
  }

  getCurrentMovie() {
    return this.movie;
  }

  getCurrentImage() {
    return this.image;
  }
}
