import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, ViewController,NavParams, ToastController} from 'ionic-angular';
import {AddGamePage} from "../add-game/add-game";
import {DetailsGamePage} from "../details-game/details-game";
import {ComunicationProvider} from "../../providers/comunication";

/**
 * Generated class for the DetailsGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-details-own-game',
    templateUrl: 'details-own-game.html',
})
export class DetailsOwnGamePage {
    game: any;

    constructor(public navCtrl: NavController,public viewCtrl: ViewController,public toastCtrl: ToastController, public comunication: ComunicationProvider, public alertCtrl: AlertController, public navParams: NavParams, public modCtrl: ModalController) {
        this.game = navParams.get('game');
        console.log(this.game);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetailsGamePage');
    }


    closeModal() {
        this.navCtrl.pop();
    }

    deleteGame() {
        let alert = this.alertCtrl.create({
            title: 'Confirmar borrado',
            message: '¿Seguro que quieres borrar este juego?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Borrar',
                    handler: () => {
                        console.log('Delete clicked');
                        this.comunication.deleteGame(this.game.id).subscribe((data) => {
                            this.presentToast();
                            this.viewCtrl.dismiss(this.game.idJuego);
                        });
                    }
                }
            ]
        });
        alert.present();
    }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Juego borrado con éxito',
            duration: 3000,
            position: 'top'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

}
