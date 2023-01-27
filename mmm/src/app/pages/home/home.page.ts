import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle = 'home';
  image = 'home.png';
  pageIcon = `../../../assets/img/${this.image}`;

  
  constructor() { }

  ngOnInit() {
    
  }

    
}
