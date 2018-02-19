import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ENV} from "../../config/config.dev";
import {LoginPage} from "../login/login";

@IonicPage()
@Component({
  selector: 'page-perfil-menu',
  templateUrl: 'perfil-menu.html',
})
export class PerfilMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilMenuPage');
  }
close(){
    this.storage.clear().then(()=>{

        this.navCtrl.setRoot(LoginPage);
        this.navCtrl.push(LoginPage);

    });
}
}
