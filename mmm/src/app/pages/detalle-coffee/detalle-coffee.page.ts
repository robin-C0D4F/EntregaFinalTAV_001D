import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-detalle-coffee',
  templateUrl: './detalle-coffee.page.html',
  styleUrls: ['./detalle-coffee.page.scss'],
})
export class DetalleCoffeePage implements OnInit {

  image = 'coffee-bean-icon.svg';
  pageIcon = `../../../assets/img/${this.image}`;
  coffee:any = null;
  pageTitle:string ='';
  constructor(private activatedRoute: ActivatedRoute, private coffeeService: CoffeeService) { 

  }

  ngOnInit() {
    this.getCoffeeDet();
    this.pageTitle = this.coffee.title;
  }

  getCoffeeDet(){
    this.activatedRoute.queryParams.subscribe(params =>{
      this.coffee = JSON.parse(params['coffee']);
    });
  }
  
}
