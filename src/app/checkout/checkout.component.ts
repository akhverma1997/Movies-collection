import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesStoreService } from '../movies-store.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm : FormGroup;
  movies: any;

  constructor(public moviesservice : MoviesStoreService, public router : Router, private formBuilder : FormBuilder) {
    this.checkoutForm = formBuilder.group({
      personName : ['',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z\\s]*'),Validators.maxLength(30)]],
      cardNumber : ['',[Validators.required,Validators.pattern('[0-9]{16}')]],
      cvc : ['',[Validators.required,Validators.pattern('[0-9]{3}')]],
      expiration : this.formBuilder.array([
        this.formBuilder.group({
          month : ['',Validators.required],
          year : ['',Validators.required]
        })
      ])
    });
   }

  ngOnInit(): void {
    this.movies = this.moviesservice.getCurrentMovie();
    
  }
  

  dosubmit() {
    let object;
    localStorage.setItem('movies-data', JSON.stringify(this.checkoutForm.value));
    const data = localStorage.getItem('movies-data');
    if (data !=null) {
      object = JSON.parse(data);
      console.log(object['personName']);
    }
    
    this.router.navigate(['/thanks']);
  }

}
