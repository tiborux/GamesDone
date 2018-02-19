import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {LocationAccuracy} from "@ionic-native/location-accuracy";
import {ENV} from "../config/config.dev";
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =  LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private locationAccuracy: LocationAccuracy,private geolocation: Geolocation,private storage: Storage) {
      storage.get(ENV.AuthKey).then((data) => {
          console.log(data);
          if(data.userId != "" && data.id != "" ){
              this.rootPage = TabsPage;

          }else{
              this.rootPage = LoginPage;
          }

      }).catch((error) => {
          this.rootPage = LoginPage;
      });
      this.locationAccuracy.canRequest().then((canRequest: boolean) => {

          if (canRequest) {
              // the accuracy option will be ignored by iOS
              this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
                  () => {
                      console.log('Request successful');

                  },
                  error => {
                      console.log('Error requesting location permissions', error);
                  }
              );
          }

      });
      this.geolocation.getCurrentPosition().then(pos => {
          var geoData = {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
          }

          console.log("Posicion" +geoData.latitude + geoData.longitude);

      }).catch(err =>{console.error(err)});
      platform.ready().then(() => {


          // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}
