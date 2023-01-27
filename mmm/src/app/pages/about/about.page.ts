import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  pageTitle = 'about';
  image = 'about.svg';
  pageIcon = `../../../assets/img/${this.image}`;

  constructor() { }

  ngOnInit() {
  }

}
