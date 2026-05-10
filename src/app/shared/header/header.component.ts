import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, ModalController, IonToolbar, IonButtons, IonButton, IonTitle } from "@ionic/angular/standalone";
import { NavController } from '@ionic/angular';
import { NgIf } from '@angular/common';
import { MenuService } from '../../core/services/menu';
import { AuthService } from 'src/app/core/services/auth';
import { LoginModalComponent } from 'src/app/features/login/modal/modal.component';
import { NoticeComponent } from 'src/app/features/notice/notice.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, NgIf, IonToolbar, IonButtons, IonButton, IonTitle],
})
export class HeaderComponent implements OnInit {
  [x: string]: any;

  @Input() title!: string;
  @Input() closemodal!: boolean;
  @Input() gobackbtn!: boolean;

  constructor(
    private menuService: MenuService,
    private navCtrl: NavController,
    private modalctrl: ModalController,
     private authService: AuthService,
     private router: Router,
  ) {}

  ngOnInit() {}

 

  goback() {
    this.navCtrl.back();
  }


//   goback() {
//   if (this.router.url.includes('otp')) {
//     this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
//     return;
//   }

//   window.history.back();
// }

  close() {
    this.modalctrl.dismiss();
  }
//   async closeAllModals() {
//   let top = await this.modalctrl.getTop();

//   while (top) {
//     await top.dismiss();
//     top = await this.modalctrl.getTop();
//   }
// }


  //  async openMenu() {
  
  //     // 👇 Guest → Modal
  //     if (this.authService.isGuestUser()) {
  
  //       this.menuService.openMenu();
  //       console.log('Is Guest User menu:', this.authService.isGuestUser());
  
  //     } else {
  // // await this.closeAllModals();
  //       const modal = await this.modalctrl.create({
  //         component: LoginModalComponent,
  //         cssClass: 'bottom-modal',
  //           breakpoints: [0, 0.25, 0.5, 1],
  // initialBreakpoint: 0.25,
  // handle: true,
  // backdropDismiss: true,
  //  presentingElement: await this.modalctrl.getTop()
  //       });
  
  //       await modal.present();
  //       console.log('Is Guest User:', this.authService.isGuestUser());
  //     }
  //   }



  async openMenu() {
  
      // 👇 Guest → Modal
      if (this.authService.isGuestUser()) {
  
        this.menuService.openMenu();
        console.log('Is Guest User menu:', this.authService.isGuestUser());
  
      } else {
  // await this.closeAllModals();
        const modal = await this.modalctrl.create({
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
    
}