import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, ModalController, IonToolbar, IonButtons, IonButton, IonTitle } from "@ionic/angular/standalone";
import { NavController } from '@ionic/angular';
import { NgIf } from '@angular/common';
import { MenuService } from '../../core/services/menu';
import { AuthService } from 'src/app/core/services/auth';
import { LoginModalComponent } from 'src/app/features/login/modal/modal.component';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, NgIf, IonToolbar, IonButtons, IonButton, IonTitle],
})
export class HeaderComponent implements OnInit {

  @Input() title!: string;
  @Input() closemodal!: boolean;
  @Input() gobackbtn!: boolean;

  constructor(
    private menuService: MenuService,
    private navCtrl: NavController,
    private modalctrl: ModalController,
     private authService: AuthService,
  ) {}

  ngOnInit() {}

 

  goback() {
    this.navCtrl.back();
  }

  close() {
    this.modalctrl.dismiss();
  }
   async openMenu() {
  
      // 👇 Guest → Modal
      if (this.authService.isGuestUser()) {
  
        this.menuService.openMenu();
        console.log('Is Guest User menu:', this.authService.isGuestUser());
  
      } else {
  await this.modalctrl.dismiss();
        const modal = await this.modalctrl.create({
          component: LoginModalComponent,
          cssClass: 'modal-content'
        });
  
        await modal.present();
        console.log('Is Guest User:', this.authService.isGuestUser());
      }
    }
}