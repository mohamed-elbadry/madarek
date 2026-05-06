import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router'; // <-- استبدل RouterLink بـ RouterModule
import { IonHeader, ModalController, IonContent, IonDatetime, IonButton, IonSegment, IonSegmentButton, IonLabel } from "@ionic/angular/standalone";
import { HeaderComponent } from "src/app/shared/header/header.component";
import { MenuService } from 'src/app/core/services/menu';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-purchase-service',
  templateUrl: './purchase-service.component.html',
  styleUrls: ['./purchase-service.component.scss'],
  standalone: true,
  imports: [IonHeader, IonContent, IonDatetime, IonButton, RouterModule, HeaderComponent, RouterLink, IonSegment, IonSegmentButton, IonLabel,NgFor,NgClass], // <-- RouterModule هنا
})
export class PurchaseServiceComponent implements OnInit {
  [x: string]: any;
 activeTime: string[] = [];

  // Time slots (you can also define directly in template)
  timeSlots = [
    '12 - 1 مساءً', '1 - 2 مساءً', '2 - 3 مساءً',
    '4 - 5 مساءً', '5 - 6 مساءً', '6 - 7 مساءً',
    '8 - 9 مساءً', '9 - 10 مساءً', '10 - 11 مساءً'
  ];
  constructor(
    private modalCtrl: ModalController,
   private menuService: MenuService,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  openMenu() {
    this.menuService.openMenu();
  }
 

  toggleTime(time: string) {
    const index=this.activeTime.indexOf(time)
    if (index > -1) {
      this.activeTime.splice(index,1); // remove active if clicked again
    } else {
      this.activeTime.push(time); // set active
    }
  }


  closeModalAfterNavigate() {
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(async () => {
      await this.modalCtrl.dismiss();
    });
  }
  


 
async goToServiceCosts() {
    // 🔴 اقفل كل الـ modals (أفضل حل)
   await this.modalCtrl.getTop().then(async (modal) => {
      while (modal) {
        await modal.dismiss();
        modal = await this.modalCtrl.getTop();
      }
    });

    this.router.navigate(['/service-costs']);
  
}


// async goToServiceCosts() {
//  console.log('NAVIGATING TO SERVICE COSTS');
//   if (this.authService.isGuestUser()) {

//     console.log('IS GUEST:', this.authService.isGuestUser());

//     await this.modalCtrl.dismiss(); // يقفل أي modal

//     this.router.navigate(['/service-costs']); // 👈 يروح للصفحة

//   } else {

//     const modal = await this.modalCtrl.create({
//       component: LoginModalComponent,
//       cssClass: 'modal-content'
//     });

//     await modal.present();
//   }
// }
  
}