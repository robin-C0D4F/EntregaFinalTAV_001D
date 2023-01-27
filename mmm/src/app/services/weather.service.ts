import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})



export class WeatherService {
  results:any;
  weatherTemp:any;
  cityname:any;
  weatherDetail:any;

  constructor(private httpClient: HttpClient) { }

  getDataWeather(): Promise<any> {
    return new Promise((resolve, reject) => {
    this.httpClient.get(`${API_URL}/weather?q=${"Santiago"}&appid=${API_KEY}&units=metric`)
    .subscribe({
        next: (respuesta) => resolve(respuesta),
        error: (error) => reject(error),
        complete: () => console.log('Complete')

      })
    })
  }
  
}
