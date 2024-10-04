import { HeadersPage } from './../../shared/headers/headers.page';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeadersPage]
})
export class ListsPage implements OnInit {
  name:string;

  constructor() { 
    this.name = "Listas de Contenido";
  }

  ngOnInit() {
  }

}
