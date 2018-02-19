import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilMenuPage } from './perfil-menu';

@NgModule({
  declarations: [
    PerfilMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilMenuPage),
  ],
})
export class PerfilMenuPageModule {}
