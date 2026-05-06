import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,ModalController } from '@ionic/angular/standalone';
import { MenuService } from '../core/services/menu';
import { LoginModalComponent } from '../features/login/modal/modal.component';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  // constructor() {
  //   addIcons({ triangle, ellipse, square });
  // }

  constructor(public menuService: MenuService, private modalCtrl: ModalController, private router: Router,private authService: AuthService) {}

async openTab3(ev: Event) {
  ev.preventDefault();
  ev.stopPropagation(); // 🔥 دي مهمة جدًا
if (this.authService.isGuestUser()) {
    this.router.navigate(['/tabs/tab3']);
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
  }
}

}
