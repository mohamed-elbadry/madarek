import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBadge,
  ModalController,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  
} from '@ionic/angular/standalone';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MenuService } from '../../app/core/services/menu';
import { AuthService } from 'src/app/core/services/auth';
import { LoginModalComponent } from '../features/login/modal/modal.component';
import { ProgramDetailsComponent } from '../features/program-details/program-details.component';
import { NoticeComponent } from '../features/notice/notice.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonBadge,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {

  constructor(
    private menuService: MenuService,
    private authService: AuthService,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  async openMenu() {

    // 👇 Guest → Modal
    if (this.authService.isGuestUser()) {

      this.menuService.openMenu();
      console.log('Is Guest User menu:', this.authService.isGuestUser());

    } else {

      const modal = await this.modalCtrl.create({
        component: LoginModalComponent,
        cssClass: 'login-sheet-modal',
      initialBreakpoint: 0.5,
    breakpoints: [0, 0.5, 1],
    backdropBreakpoint: 0.3,
    handle: true
      });

      await modal.present();
      console.log('Is Guest User:', this.authService.isGuestUser());
    }
  }

  // ✅ لازم تكون جوه الكلاس
  async openDetails() {
    const modal = await this.modalCtrl.create({
        component: ProgramDetailsComponent,
        cssClass: 'modal-content'
      });

      await modal.present();
  }

  async opennotice() {

    // 👇 Guest → Modal
    if (this.authService.isGuestUser()) {
      const modal = await this.modalCtrl.create({
                component: NoticeComponent,
                cssClass: 'modal-content',
               
              });
        
              await modal.present();
      console.log('Is Guest User menu:', this.authService.isGuestUser());

    } 
    else {

      const modallog = await this.modalCtrl.create({
        component: LoginModalComponent,
        cssClass: 'login-sheet-modal',
      initialBreakpoint: 0.5,
    breakpoints: [0, 0.5, 1],
    backdropBreakpoint: 0.3,
    handle: true
      });
      await modallog.present();

      console.log('Is Guest User:', this.authService.isGuestUser());
    }
  }
  //  async opennotice() {
  //   const modal = await this.modalCtrl.create({
  //       component: NoticeComponent,
  //       cssClass: 'modal-content'
  //     });

  //     await modal.present();
  // }
//   async openLoginModal() {
//   const modal = await this.modalCtrl.create({
//     component: LoginModalComponent,
//     breakpoints: [0, 0.3, 0.6, 1],
//     initialBreakpoint: 0.3,
//     cssClass: 'bottom-modal'
//   });

//   await modal.present();
// }
}