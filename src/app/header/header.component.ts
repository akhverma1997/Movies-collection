import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {

  }

  myroute() {
    document.querySelector('#latest')!.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
