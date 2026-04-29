import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-onboardingthre',
  templateUrl: './onboardingthre.page.html',
  styleUrls: ['./onboardingthre.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonButton]
})
export class OnboardingthrePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
