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

  presentingElement!: HTMLElement;

  constructor(
     private menuService: MenuService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
  }

  async openmodel() {
    const modal = await this.modalCtrl.create({
      component: ProgramDetailsComponent
      
    });

    await modal.present();
  }

  openMenu() {
    this.menuService.openMenu();
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