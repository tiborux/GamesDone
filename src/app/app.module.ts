import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {SearchPage} from '../pages/search/search';
import {TabsPage} from '../pages/tabs/tabs';
import {HttpModule} from "@angular/http";
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ComunicationProvider} from "../providers/comunication";
import {ApiProvider} from "../providers/api";
import {AuthProviders} from "../providers/auth";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {LocationAccuracy} from "@ionic-native/location-accuracy";
import {Geolocation} from "@ionic-native/geolocation";
import {IonicStorageModule, Storage} from "@ionic/storage";
import {DetailsGamePage} from "../pages/details-game/details-game";
import {AddGamePage} from "../pages/add-game/add-game";
import {ListGamePage} from "../pages/list-game/list-game";
import {DetailsOwnGamePage} from "../pages/details-own-game/details-own-game";
import {MapPage} from "../pages/map/map";
import { Ionic2RatingModule } from 'ionic2-rating';
import {PerfilMenuPage} from "../pages/perfil-menu/perfil-menu";

@NgModule({
    declarations: [
        MyApp,
        SearchPage,
        TabsPage,
        LoginPage,
        RegisterPage,
        DetailsGamePage,
        AddGamePage,
        ListGamePage,
        DetailsOwnGamePage,
        MapPage,
        PerfilMenuPage,


    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp, {}, {
            links: [
                { component: SearchPage, segment: 'search' },
                { component: TabsPage, segment: 'home' },
                { component: LoginPage, segment: 'login' },
                { component: RegisterPage,segment: 'register' },
                { component: ListGamePage, segment: 'list' },
                { component: MapPage,  segment: 'map' },

                ]
        }),
        IonicStorageModule.forRoot(),
        Ionic2RatingModule // Put ionic2-rating module here

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        SearchPage,
        TabsPage,
        LoginPage,
        RegisterPage,
        DetailsGamePage,
        AddGamePage,
        ListGamePage,
        DetailsOwnGamePage,
        MapPage,
        PerfilMenuPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ComunicationProvider,
        ApiProvider,
        Geolocation,
        LocationAccuracy,
AuthProviders,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
    ]
})
export class AppModule {
}
