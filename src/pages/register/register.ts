import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Usuario} from "../../models/usuario";
import {ComunicationProvider} from "../../providers/comunication";
import {Geolocation} from "@ionic-native/geolocation";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    nombre: any;
    password: any;
    email: any;
    edad: any;
    username: any;
    user: any;
    localizacion = {lat: '', lng: ''};
    realm: any = "";

    constructor(public navCtrl: NavController, public navParams: NavParams, public comunication: ComunicationProvider, public toastCtrl: ToastController,public geolocation: Geolocation) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
        this.getPosition();
    }

    register() {
        this.user = new Usuario(this.nombre, this.localizacion, this.edad, this.realm, this.email, this.username, this.password);
        console.log(this.user);
        this.comunication.register(this.user).subscribe((data) => {
                console.log(data);
                this.presentToast();
                this.navCtrl.pop();
            },
            (error) => console.log(error)
        );
    }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Te has registrado correctamente',
            duration: 3000,
            position: 'top'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }
    getPosition(): any {

        this.geolocation.getCurrentPosition().then((response) => {

            this.localizacion.lat=response.coords.latitude.toString();
            this.localizacion.lng=response.coords.longitude.toString();

            console.log(this.localizacion);


        }).catch(
            () => {
                console.log('GPS OFF');
            }
        );
    }
}
