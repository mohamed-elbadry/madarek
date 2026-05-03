import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- استبدل RouterLink بـ RouterModule
import { IonHeader, ModalController, MenuController, IonContent, IonDatetime, IonButton, IonSegment, IonSegmentButton, IonLabel } from "@ionic/angular/standalone";
import { HeaderComponent } from "src/app/shared/header/header.component";

@Component({
  selector: 'app-purchase-service',
  standalone: true,
  templateUrl: './purchase-service.component.html',
  styleUrls: ['./purchase-service.component.scss'],
  imports: [IonHeader, IonContent, IonDatetime, IonButton, RouterModule, HeaderComponent, IonSegment, IonSegmentButton, IonLabel,NgFor,NgClass], // <-- RouterModule هنا
})
export class PurchaseServiceComponent implements OnInit {
 activeTime: string[] = [];

  // Time slots (you can also define directly in template)
  timeSlots = [
    '12 - 1 مساءً', '1 - 2 مساءً', '2 - 3 مساءً',
    '4 - 5 مساءً', '5 - 6 مساءً', '6 - 7 مساءً',
    '8 - 9 مساءً', '9 - 10 مساءً', '10 - 11 مساءً'
  ];
  constructor(
    private modalCtrl: ModalController,
    private menuService: MenuController
  ) {}

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  openMenu() {
    this.menuService.open();
  }
 

  toggleTime(time: string) {
    const index=this.activeTime.indexOf(time)
    if (index > -1) {
      this.activeTime.splice(index,1); // remove active if clicked again
    } else {
      this.activeTime.push(time); // set active
    }
  }
}