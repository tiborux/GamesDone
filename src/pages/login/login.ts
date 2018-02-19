import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {ENV} from "../../config/config.dev";
import {AuthProviders} from "../../providers/auth";
import {RegisterPage} from "../register/register";
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    loading: any;

    credentials = {username: "", password: ""};

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                public loadingCtrl: LoadingController,
                public auth: AuthProviders,
                public storage: Storage) {
    }

    showLoader() {

        this.loading = this.loadingCtrl.create({
            content: "Autenticando..."
        });

        this.loading.present();

    }

    login() {
        this.showLoader();
        this.auth.postData(this.credentials).then((result) => {
            let responseData = result;
            console.log(responseData);
            if(responseData){
                this.storage.set(ENV.AuthKey, responseData).then(()=>{

                });
                this.navCtrl.setRoot(TabsPage);
            }

            this.loading.dismiss();
        }, (err) => {
            let toast = this.toastCtrl.create({
                message: "Su usuario o contraseña son incorrectos",
                duration: 5000,
                position: 'top',
                dismissOnPageChange:true
            });

            this.credentials.password = "";

            toast.present();
            this.loading.dismiss();
        });


    }

    /*recoveryPassword(){
      this.navCtrl.push(RecoveryPasswordPage);
    }*/
    createAccount() {
        this.navCtrl.push(RegisterPage);
    }
}
