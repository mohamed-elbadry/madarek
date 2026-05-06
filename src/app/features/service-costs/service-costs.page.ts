import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/header/header.component";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-service-costs',
  templateUrl: './service-costs.page.html',
  styleUrls: ['./service-costs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonItem, IonInput, IonButton, IonIcon, RouterLink]
})
export class ServiceCostsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
