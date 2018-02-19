import { Component } from '@angular/core';

import { SearchPage } from '../search/search';

import {ListGamePage} from "../list-game/list-game";
import {MapPage} from "../map/map";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListGamePage;
  tab2Root = SearchPage;
  tab3Root = MapPage;

  constructor() {

  }
}
