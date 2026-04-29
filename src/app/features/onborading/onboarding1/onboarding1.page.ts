import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-onboarding1',
  templateUrl: './onboarding1.page.html',
  styleUrls: ['./onboarding1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton,RouterLink]
})
export class Onboarding1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
