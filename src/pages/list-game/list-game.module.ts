import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListGamePage } from './list-game';

@NgModule({
  declarations: [
    ListGamePage,
  ],
  imports: [
    IonicPageModule.forChild(ListGamePage),
  ],
})
export class ListGamePageModule {}
