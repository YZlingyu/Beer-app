import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { LinkPage } from '../link/link';
import { BeerPage } from '../beer/beer';
import { RecommendPage } from '../recommend/recommend';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = BeerPage;
  tab2Root = RecommendPage;
  tab3Root = AboutPage;
  tab4Root = LinkPage;

  constructor() {

  }
}
