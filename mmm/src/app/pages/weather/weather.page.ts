import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  pageTitle = 'Weather';
  image = 'weather.svg';
  pageIcon = `../../../assets/img/${this.image}`;

  respuesta:any;
  weathertemp:any;
  cityName: any;
  weatherdetail: any;
  todayDate = new Date()
  weatherIcon:any;
  mintemp:any;
  maxtemp:any;
  humidity:any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherTemp();
  }
  getWeatherTemp(){   
    this.weatherService.getDataWeather()
    .then(data => {
      this.respuesta = data;
      this.cityName = this.respuesta.name;
      this.weathertemp = this.respuesta.main.temp;
      this.weatherdetail = this.respuesta.weather[0].description;
      this.maxtemp = this.respuesta.main.temp_max;
      this.mintemp = this.respuesta.main.temp_min;
      this.humidity = this.respuesta.main.humidity;
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.respuesta.weather[0].icon}@4x.png`
      console.log(this.cityName);      
    },
    (error) => {
      console.log(error);
    });
  }
}
