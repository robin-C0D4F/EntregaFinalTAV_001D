import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { CoffeeService } from 'src/app/services/coffee.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.page.html',
  styleUrls: ['./coffee.page.scss'],
})
export class CoffeePage implements OnInit {

  pageTitle = 'Coffee List';
  image = 'coffee.svg';
  pageIcon = `../../../assets/img/${this.image}`;

  coffeeList: any = [];
  page: number = 1;

  @ViewChild(IonInfiniteScroll) infinite!: IonInfiniteScroll;

  constructor(private coffeeService: CoffeeService,
    private navController: NavController) { }

  ngOnInit() {
    this.getCoffeeList();
  }

  getCoffeeList(){   
    this.coffeeService.getCoffeeHot()
    .then(data => {
      this.coffeeList = [...this.coffeeList,...data];
      console.log(this.coffeeList);      
    },
    (error) => {
      console.log(error);
    });

    this.coffeeService.getCoffeeIced()
    .then(data => {
      this.coffeeList = [...this.coffeeList,...data];
      console.log(this.coffeeList);      
    },
    (error) => {
      console.log(error);
    });
  }

  goToDetalleCoffee(coffee:any): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        coffee : JSON.stringify(coffee)
      }      
    };
    this.navController.navigateForward(['detalle-coffee/'],navigationExtras);
  }


}
