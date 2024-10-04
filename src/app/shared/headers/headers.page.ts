import { Component, OnInit, Input } from '@angular/core';
import { MenuPage } from '../menu/menu.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.page.html',
  styleUrls: ['./headers.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,MenuPage,IonMenuButton]
})
export class HeadersPage implements OnInit {
 @Input() name:string = "presentacion";
   constructor() { }

  ngOnInit() {
  }

}
