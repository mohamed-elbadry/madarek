import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonIcon, IonButtons, IonModal, IonCheckbox,ModalController } from '@ionic/angular/standalone';

import { HeaderComponent } from "src/app/shared/header/header.component";
import { ConfirmPaymentComponent } from '../confirm-payment/confirm-payment.component';

@Component({
  selector: 'app-order-payment',
  templateUrl: './order-payment.page.html',
  styleUrls: ['./order-payment.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput, IonButton, IonIcon, IonButtons, IonModal, IonCheckbox, HeaderComponent]
})
export class OrderPaymentPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
 canDismiss = true;
  ngOnInit() {
  }


async openmodal() {
  this.modalCtrl.dismiss()
    
const modal = await this.modalCtrl.create({
     component: ConfirmPaymentComponent,
    });
    modal.present();
  }
 
  }
