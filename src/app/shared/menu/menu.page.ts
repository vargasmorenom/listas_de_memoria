
import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenu,IonLabel
  ,IonMenuToggle,IonMenuButton,IonSplitPane, IonButton, IonIcon, IonItem } from '@ionic/angular/standalone';

import { menu } from 'src/app/config/config.web';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonItem, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar,IonButtons, IonLabel,IonMenuToggle,IonMenuButton,IonSplitPane,IonMenu,IonIcon]

})
export class MenuPage implements OnInit {
  public menuApp : any;

  constructor() {
    this.menuApp = menu[0]['es'];
 
   }

  ngOnInit() {
  }

}
