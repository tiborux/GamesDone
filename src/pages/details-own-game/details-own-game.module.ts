import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {DetailsOwnGamePage} from "./details-own-game";

@NgModule({
  declarations: [
    DetailsOwnGamePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsOwnGamePage),
  ],
})
export class DetailsOwnGamePageModule {}
