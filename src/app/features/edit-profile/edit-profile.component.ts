import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonButtons, IonModal, ModalController } from "@ionic/angular/standalone";

import { HeaderComponent } from "src/app/shared/header/header.component";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  imports: [IonButton, IonButtons, IonModal, RouterLink, HeaderComponent],
})
export class EditProfileComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }
  closemodal() {
    return this.modalCtrl.dismiss();
  }
  isDeleteOpen = false;
  openDeleteModal() {
    this.isDeleteOpen = true;
  }
  closeDeleteModal() { this.isDeleteOpen = false; }
  async confirmDelete() {
    await this.modalCtrl.dismiss(); // confirm modal
  await this.modalCtrl.dismiss(); // edit profile modal

    
  }

}
