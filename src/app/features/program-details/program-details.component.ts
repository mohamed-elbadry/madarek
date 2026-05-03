import { Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonModal, ModalController, IonHeader, IonContent, IonBadge, IonCard, IonFooter } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from "src/app/shared/header/header.component";
import { AuthService } from '../../core/services/auth';


@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss'],
  standalone: true,
  imports: [IonHeader, IonButton, IonButtons, IonModal, IonContent, RouterLink, IonBadge, HeaderComponent, IonCard, IonFooter],
})
export class ProgramDetailsComponent implements OnInit {

  constructor(
  private modalCtrl: ModalController,
  private router: Router,
  public auth: AuthService
) {}

  ngOnInit(): void {}

  closemodal() {
    return this.modalCtrl.dismiss();
  }
payservice() {
this.router.navigate(['/purchase-service']);
    return this.modalCtrl.dismiss();

}
}