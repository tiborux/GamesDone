import { Component } from '@angular/core';
import { NavController ,LoadingController} from 'ionic-angular';
import {ComunicationProvider} from "../../providers/comunication";
import { ModalController, NavParams } from 'ionic-angular';
import {DetailsGamePage} from "../details-game/details-game";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
    loading: any;
      game:string;
      games:any=[];
      constructor(public navCtrl: NavController,public modalCtrl: ModalController, public communication: ComunicationProvider,public loadingController: LoadingController) {
          this.games=[];
      }
      getGame() {
          this.loading = this.loadingController.create({content: "Buscando juegos"});
          this.loading.present();
          this.games=[];
          this.communication.searchGames(this.game).subscribe(
              (data) => {

                  this.games.push(data.juegos);
                  this.loading.dismissAll();

              },
              (error) => {
                  console.log(error);
              }
          );
      }

      details(game){
          let profileModal = this.modalCtrl.create(DetailsGamePage,{game:game});
          profileModal.present();

      }
}
