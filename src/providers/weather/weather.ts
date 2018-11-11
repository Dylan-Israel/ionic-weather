import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  public apiKey = 'b86d21440d8c9a110912a2eb0845abb4';
  public url = `https://api.openweathermap.org/data/2.5/weather?q=`;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  public getWeather(city) {
    return this.http.get(`${this.url}${city}&appid=${this.apiKey}`);
  }

}
