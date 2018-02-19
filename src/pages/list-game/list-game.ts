import {Component} from '@angular/core';
import {
    IonicPage, LoadingController, ModalController, NavController, NavParams, Platform,
    PopoverController
} from 'ionic-angular';
import {ComunicationProvider} from "../../providers/comunication";
import {ENV} from "../../config/config.dev";
import { Storage } from '@ionic/storage';
import {DetailsOwnGamePage} from "../details-own-game/details-own-game";
import {PerfilMenuPage} from "../perfil-menu/perfil-menu";

/**
 * Generated class for the ListGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-list-game',
    templateUrl: 'list-game.html',
})
export class ListGamePage {
    loading: any;
    games: any = [];
userId:any;
game:any;
games_save:any;
    constructor(public popoverCtrl: PopoverController,public platform: Platform,public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, public loadingController: LoadingController, public comunication: ComunicationProvider,public storage: Storage) {
        storage.get('games').then((data) => {
            this.games = data;
            this.games_save=data;
        }).catch((error) => {
            this.getGames();
        });
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            this.getGames();
            refresher.complete();
        }, 1000);
    }
    getGames() {
        this.games=[];
        this.loading = this.loadingController.create({content: "Cargando lista de juegos"});
        this.loading.present();

        this.comunication.getGames().subscribe(
            (data) => {

                this.games=data;
                this.games_save=this.games;
                this.storage.set('games', this.games).then(()=>{
                    this.loading.dismissAll();
                });


            },
            (error) => {
                console.log(error);
            }
        );

    }
    details(game){
        let profileModal = this.modalCtrl.create(DetailsOwnGamePage,{game:game});
        profileModal.present();
        profileModal.onDidDismiss(data => {
            this.games= this.games.filter(item => item.idJuego !== data);

        });

    }

    setFilteredGame(ev) {
        this.games=this.games_save;
        // if the value is an empty string don't filter the items
        if (this.game && this.game.trim() != '') {
            this.games = this.games.filter((item) => {
                return (item.juego.nombre.toLowerCase().indexOf(this.game.toLowerCase()) > -1);
            })
        }
    }
    onCancel(ev){
        this.games=this.games_save;
    }
    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create(PerfilMenuPage);
        popover.present({
            ev: myEvent
        });
    }
}
