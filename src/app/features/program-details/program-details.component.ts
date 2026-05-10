import { Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonModal, ModalController, IonHeader, IonContent, IonBadge, IonCard, IonFooter } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from "src/app/shared/header/header.component";
import { AuthService } from '../../core/services/auth';
import { ConsultantDetailsComponent } from '../consultant-details/consultant-details.component';
import { MenuService } from 'src/app/core/services/menu';
import { LoginModalComponent } from '../login/modal/modal.component';
import { PurchaseServiceComponent } from '../purchase-service/purchase-service.component';


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
  public authService: AuthService,
  private menuService: MenuService
) {}

  ngOnInit(): void {}

  closemodal() {
    return this.modalCtrl.dismiss();
  }

 async goToConsultant() {
    const modal = await this.modalCtrl.create({
        component: ConsultantDetailsComponent,
        cssClass: 'modal-content'
      });

      await modal.present();
  }


  async payservice() {

  if (this.authService.isGuestUser()) {
   console.log('IS GUEST:', this.authService.isGuestUser());
   const modal = await this.modalCtrl.create({
      component: PurchaseServiceComponent
    });

    await modal.present();

  } else {
 this.authService.setRedirectModal(
    ProgramDetailsComponent
  );

    // 👇 User → Login
    const modal = await this.modalCtrl.create({
      component: LoginModalComponent,
       cssClass: 'login-sheet-modal',
      initialBreakpoint: 0.5,
    breakpoints: [0, 0.5, 1],
    backdropBreakpoint: 0.3,
    handle: true
    });

    await modal.present();
  }
}

  // async payservice() {
  
  //     // 👇 Guest → Modal
  //     if (this.authService.isGuestUser()) {
  //       console.log('Is Guest User menu:', this.authService.isGuestUser());
  //      this.menuService.payservice();
  
  //     } 
  //     else {
  //       console.log('Is Guest User :', this.authService.isGuestUser());
  
  //       const modal = await this.modalCtrl.create({
  //         component: LoginModalComponent,
  //         cssClass: 'modal-content'
  //       });
  
  //       await modal.present();
  //     }
  //   }
}