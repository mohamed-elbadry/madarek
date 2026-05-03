import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, ModalController, IonToolbar, IonButtons, IonButton, IonTitle } from "@ionic/angular/standalone";
import { NavController } from '@ionic/angular';
import { NgIf } from '@angular/common';
import { MenuService } from '../../core/services/menu';
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
    private modalctrl: ModalController
  ) {}

  ngOnInit() {}

  openMenu() {
    this.menuService.openMenu();
  }

  goback() {
    this.navCtrl.back();
  }

  close() {
    this.modalctrl.dismiss();
  }
}