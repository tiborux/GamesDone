import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, Platform} from 'ionic-angular';
import 'rxjs/add/operator/map';

declare var google;
import {Geolocation} from '@ionic-native/geolocation';
import {ComunicationProvider} from "../../providers/comunication";

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-map',
    templateUrl: 'map.html',
})
export class MapPage {
    @ViewChild('mapContainer') mapContainer: ElementRef;
    map: any;
    loading: any;
    infoWindows: any;


    constructor(public comunication: ComunicationProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public geolocation: Geolocation) {
        this.infoWindows = [];


    }


    ionViewDidLoad() {
        this.displayGoogleMap();
    }

    displayGoogleMap() {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando mapa...'
        });

        this.loading.present();
        this.geolocation.getCurrentPosition().then(pos => {
            this.loading.dismissAll();
            let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            let mapOptions = {
                center: latLng,
                disableDefaultUI: true,
                zoom: 11,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
            this.getMarkers();
        }).catch(err => {
            console.error(err)
        });


    }

    getMarkers() {
        this.comunication.getUsers().subscribe((data) => {
            this.addMarkersToMap(data);
        });
    }

    addMarkersToMap(markers) {
        for (let marker of markers) {
            if (marker.localizacion) {
                var position = new google.maps.LatLng(marker.localizacion.lat, marker.localizacion.lng);

                var userMarker = new google.maps.Marker({position: position, title: marker.nombre});
                userMarker.setMap(this.map);
                this.addInfoWindowToMarker(userMarker,marker);

            }
        }

    }
    addInfoWindowToMarker(userMarker,marker) {
        var infoWindowContent = '<div id="content"><h1 id="firstHeading" class="firstHeading">' + marker.nombre + '</h1></div>';
        var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        userMarker.addListener('click', () => {
            this.closeAllInfoWindows();
            infoWindow.open(this.map, marker);
        });
        this.infoWindows.push(infoWindow);
    }
    closeAllInfoWindows() {
        for(let window of this.infoWindows) {
            window.close();
        }
    }

}
