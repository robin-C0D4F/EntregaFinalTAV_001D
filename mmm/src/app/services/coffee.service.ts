import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  urlEndPoint: string = 'https://api.sampleapis.com/coffee/'

  constructor(private httpClient: HttpClient) { }



  getCoffeeHot(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.urlEndPoint}hot`)
        .subscribe({
          next: (respuesta) => resolve(respuesta),
          error: (error) => reject(error),
          complete: () => console.log('Complete')
        })
    })
  }

  getCoffeeIced(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.urlEndPoint}iced`)
        .subscribe({
          next: (respuesta) => resolve(respuesta),
          error: (error) => reject(error),
          complete: () => console.log('Complete')
        })
    })
  }


}
