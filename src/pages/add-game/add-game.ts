import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ComunicationProvider} from "../../providers/comunication";

/**
 * Generated class for the AddGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-game',
  templateUrl: 'add-game.html',
})
export class AddGamePage {
game: any;
time: any;
rating: any;
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,public comunication:ComunicationProvider) {
      this.game=navParams.get('game');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGamePage');
  }

  addGame(){
    this.comunication.addGame(
        {"idJuego": this.game.id,
          "valoracion": this.rating,
          "tiempo": this.time}).subscribe((data)=>{
              this.presentToast();
        this.navCtrl.pop();
    })
  }
    closeModal() {
        this.navCtrl.pop();
    }
    onModelChange(rating) {
        this.rating=rating;
    }
    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Juego añadido correctamente',
            duration: 3000,
            position: 'top'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }
}
