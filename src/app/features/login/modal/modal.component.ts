import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonContent, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login-modal',
 templateUrl: './modal.component.html',
  standalone: true,
  imports: [IonContent, IonButton]
})
export class LoginModalComponent {

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  close() {
    this.modalCtrl.dismiss();
  }

  goToLogin() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/mobilecode']);
  }
}