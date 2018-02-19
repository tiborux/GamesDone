import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsGamePage } from './details-game';

@NgModule({
  declarations: [
    DetailsGamePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsGamePage),
  ],
})
export class DetailsGamePageModule {}
