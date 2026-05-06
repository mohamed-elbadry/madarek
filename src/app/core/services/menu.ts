import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth';
import { ModalController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { LoginModalComponent } from 'src/app/features/login/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  [x: string]: any;

  private menuState = new BehaviorSubject<boolean>(false);
  menuState$ = this.menuState.asObservable();

  constructor(private authService: AuthService, private modalCtrl: ModalController, private router: Router) {}
  openMenu() {
    if (this.authService.isGuestUser()) {
      this.menuState.next(true);
    }
  }
   


  

//   async payservice() {
//  console.log('PAY SERVICE CALLED');
//     // 👇 لو مش Guest → افتح menu
//     if (this.authService.isGuestUser()) {
//       const modal = await this.modalCtrl.create({
//                 component: PurchaseServiceComponent,
//               });
        
//               await modal.present();
//     }

    


  closeMenu() {
    this.menuState.next(false);
  }
}