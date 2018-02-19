import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {ApiProvider} from './api';
import {Storage} from '@ionic/storage';
import {ENV} from "../config/config.dev";

@Injectable()
export class ComunicationProvider {

    userId: any;
    token: any;

    constructor(public http: Http, public api: ApiProvider, public storage: Storage) {
        this.storage.get(ENV.AuthKey).then((data) => {
            this.userId = data.userId;
            this.token = data.id;
        }).catch(
            error => {
                console.log(error);
            }
        );
    }



    private getOptions() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', this.token);
        return new RequestOptions({headers: headers});
    }


    searchGames(game) {
        return this.api.get(ENV.SEARCH_GAMES(game), this.getOptions()).map(resp => resp.json());
    }

    register(user) {
        return this.api.post(ENV.REGISTER_USER, user, this.getOptions()).map(resp => resp.json());
    }

    addGame(game) {
        console.log(this.token);
        return this.api.post(ENV.ADD_GAME(this.userId), game, this.getOptions()).map(resp => resp.json());

    }

    getGames(){
        return this.api.get(ENV.GET_GAMES(this.userId), {},this.getOptions()).map(resp => resp.json());
    }
    deleteGame(game){
        return this.api.delete(ENV.DELETE_GAME(this.userId,game),this.getOptions()).map(resp => resp.json());
    }

    getUsers(){
        return this.api.get(ENV.GET_USERS, {},this.getOptions()).map(resp => resp.json());

    }


}
