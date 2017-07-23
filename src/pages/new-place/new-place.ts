import { Component } from '@angular/core';
import {PlacesService} from "../../services/places.service";
import {NavController} from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  location: any;

  constructor(private placesService: PlacesService,
              private navCtrl: NavController,
              private geolocation: Geolocation) {}

  onAddPlace(value: {title: string}) {
    this.placesService.addPlace(value);
    this.navCtrl.pop();
  }

  onLocateUser() {
    this.geolocation.getCurrentPosition()
      .then((location) => {
        this.location = location;
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);

    })
      .catch((error) => {
        console.log('Error getting location', error);
    });
  }
}
