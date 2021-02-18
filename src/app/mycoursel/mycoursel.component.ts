import { Component, OnInit } from '@angular/core';
import { MoviesStoreService } from '../movies-store.service';

@Component({
  selector: 'app-mycoursel',
  templateUrl: './mycoursel.component.html',
  styleUrls: ['./mycoursel.component.css']
})
export class MycourselComponent implements OnInit {

  ImagesStore : any;
  counter = 0;
  previous = 1;
  constructor(public moviesservice : MoviesStoreService) {
  }

  ngOnInit(): void {
    this.moviesservice.getImages().subscribe((data: any) => {
      this.ImagesStore = data;
      for (const obj of this.ImagesStore) {
        if (obj.status === '0') this.counter++;
}
    })
  }

  ngAfterViewInit() : void {
  }

  
}
