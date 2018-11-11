import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public weather: any;
  public location: string;

  constructor(
    public navCtrl: NavController,
    public weatherService: WeatherProvider,
    private storage: Storage
    ) {

  }
  // fires off when component is loaded similar to ngOnInit
  public async ionViewWillEnter(): Promise<void> {
    this.location = await this.storage.get('location') || 'Tampa';

    const response = await this.weatherService.getWeather(this.location).toPromise();
    this.weather = response;
    console.log(this.weather)
  }

}
