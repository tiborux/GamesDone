import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {AddGamePage} from "../add-game/add-game";

/**
 * Generated class for the DetailsGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-details-game',
    templateUrl: 'details-game.html',
})
export class DetailsGamePage {
    game: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public modCtrl: ModalController) {
        this.game = navParams.get('game');
        console.log(this.game);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetailsGamePage');
    }

    addGame() {
        let modal = this.modCtrl.create(AddGamePage, {game: this.game});
        modal.present();
        modal.onDidDismiss(data => {
            this.navCtrl.pop();
        });
    }

    closeModal() {
        this.navCtrl.pop();
    }

}
