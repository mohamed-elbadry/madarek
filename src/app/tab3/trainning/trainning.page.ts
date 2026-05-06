import { ModalController } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBadge, IonTextarea } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/header/header.component";
import { home } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainning',
  templateUrl: './trainning.page.html',
  styleUrls: ['./trainning.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonButton, IonBadge, IonTextarea]
})
export class TrainningPage implements OnInit {

  constructor( private modalCtrl: ModalController, private router:Router) { }

  ngOnInit() {
  }

  selectedRating: number = 0;

setRating(index: number) {
  this.selectedRating = index;
}
 gohome() {

  this.router.navigate(['/tabs/tab1/']);
 }
}
