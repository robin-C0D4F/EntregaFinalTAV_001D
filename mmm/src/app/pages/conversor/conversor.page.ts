import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  pageTitle = 'conversor';
  image = 'conversor.svg';
  pageIcon = `../../../assets/img/${this.image}`;

  listadoMonedas: any = [];
  valorMoneda: any = [];

  constructor(private conversorService: ConversorService) { }

  codigo: any =[];
  nombre: any =[];

  resultRate: any;
  swappedRate: any;

  valorIni: any;
  valorFin: any;

  nomIni: any = 'CLP'; 
  nomFin: any = 'USD'; 


  ngOnInit() {
    this.getListadoMonedas();
    this.getListadoValores();
  }

  /* An asynchronous function which retrieves 
  CountryCode List
  */
  async getListadoMonedas() {
    try {
      const res = await this.conversorService.getListadoMonedas();
      for (let x in res['results']) {
        this.codigo.push(x);
        this.nombre.set(x, res['results'][x].monedaNombre);
      }
    } catch (err) {
      console.error(err);
    }
    console.log(this.nombre);
  }

  async getListadoValores() {
    let from = this.valorIni;
    let to = this.nomFin;
    try {
      const exchangeRate = await this.conversorService.getListadoValores(from, to);
      let rate = exchangeRate[from + "_" + to].val;
      this.resultRate = rate;
    }
    catch (err) {
      console.error(err);
    }
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
  
  calculoIni() {
    this.valorIni = this.valorFin * parseFloat(this.resultRate);
  }

  calculoFin() {
    this.valorFin = this.valorIni / parseFloat(this.resultRate);
  }

}

