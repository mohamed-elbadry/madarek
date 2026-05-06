import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuService } from '../../app/core/services/menu';
import { ModalController, IonSearchbar, IonCardTitle, IonBadge, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonHeader, IonContent, IonList, IonCheckbox, IonItem, IonSegment, IonSegmentButton, IonLabel } from '@ionic/angular/standalone';
import { ProgramDetailsComponent } from 'src/app/features/program-details/program-details.component';
import { HeaderComponent } from "src/app/shared/header/header.component";
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular/standalone';
import { LoginModalComponent } from '../features/login/modal/modal.component';
import { AuthService } from '../core/services/auth';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonSearchbar,
    IonCardTitle,
    IonBadge,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonModal,
    IonHeader,
    IonContent,
    IonList,
    IonCheckbox,
    IonItem,
    IonSegment,
    IonSegmentButton,
    IonLabel
]
})
export class Tab2Page implements OnInit {
  [x: string]: any;

  presentingElement!: HTMLElement;

  constructor(
     private menuService: MenuService,
    private modalCtrl: ModalController,
  
    private authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  async openmodel() {
    const modal = await this.modalCtrl.create({
      component: ProgramDetailsComponent
      
    });

    await modal.present();
  }

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
isSearchOpen = false;

openSearch() {
  this.isSearchOpen = true;
}

closeSearch() {
  this.isSearchOpen = false;
}
@ViewChild('myModal') modal!: IonModal;

closeModal() {
  this.modal.dismiss();
}
}