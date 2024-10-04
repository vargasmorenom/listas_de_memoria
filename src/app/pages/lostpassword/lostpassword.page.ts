import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lostpassword',
  templateUrl: './lostpassword.page.html',
  styleUrls: ['./lostpassword.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LostpasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
