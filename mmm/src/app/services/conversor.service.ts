import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  urlEndPoint: string = 'https://mindicador.cl/api';

  constructor(private httpClient: HttpClient) { }

  getListadoMonedas(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.urlEndPoint}`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete')
      })
    })
  }


  getListadoValores(from: String, to: String): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.urlEndPoint}`)
      .subscribe({
        next: (respuesta) => resolve(respuesta),
        error:  (error) => reject(error),
        complete: () => console.log('Complete')
      })
    })
  }


}




