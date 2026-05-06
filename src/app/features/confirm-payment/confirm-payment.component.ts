import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, IonContent, IonButton } from '@ionic/angular/standalone'
import { HeaderComponent } from "src/app/shared/header/header.component";
@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.scss'],
  imports: [HeaderComponent, IonContent, IonButton],
})
export class ConfirmPaymentComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, private router:Router) { }

  ngOnInit() {}
  closemodal() {
    return this.modalCtrl.dismiss();
  }
  gotrening(){
    this.modalCtrl.dismiss();
    this.router.navigate(['/tabs/tab3'])
  }
}
