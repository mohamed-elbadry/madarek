import { Injectable } from '@angular/core';
import { LoginModalComponent } from 'src/app/features/login/modal/modal.component';
import { ModalController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private redirectUrl: string | null = null;
  private redirectModal: any = null;
  constructor(private router: Router,private modalCtrl: ModalController) { }
   // =========================
  // ROUTE
  // =========================
private lastUrl: string = '/tabs/tab1';

setLastUrl(url: string) {
  this.lastUrl = url;
}

getLastUrl() {
  return this.lastUrl;
}
  setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }

  getRedirectUrl() {
    return this.redirectUrl;
  }

  clearRedirectUrl() {
    this.redirectUrl = null;
  }
   // =========================
  // MODAL
  // =========================

  setRedirectModal(component: any) {
    this.redirectModal = component;
  }

  getRedirectModal() {
    return this.redirectModal;
  }

  clearRedirectModal() {
    this.redirectModal = null;
  }

  // 📱 رقم الموبايل
  private phone: string = '';

  setPhone(phone: string) {
    this.phone = phone;
  }

  getPhone(): string {
    return this.phone;
  }

  isAllowed(): boolean {
    return this.phone === '555555555';
  }

  // 🔐 OTP Error
  private otpError: string = '';

  setOtpError(msg: string) {
    this.otpError = msg;
  }

  getOtpError() {
    return this.otpError;
  }

  // 🔐 OTP
  setOtp(otp: string) {
    localStorage.setItem('otp', otp);
  }

  getOtp(): string {
    return localStorage.getItem('otp') || '';
  }

  isOtpValid(): boolean {
    return this.getOtp() === '1234';
  }

  // 👤 Guest Mode (تم التعديل هنا)
  setGuest(value: boolean) {
    localStorage.setItem('isGuest', JSON.stringify(value));
  }

  isGuestUser(): boolean {
    return JSON.parse(localStorage.getItem('isGuest') || 'false');
  }
//  async openLoginModal() {
//     const modal = await this.modalCtrl.create({
//       component: LoginModalComponent,
//       cssClass: 'login-sheet-modal',
//       initialBreakpoint: 0.5,
//       breakpoints: [0, 0.5, 1],
//       backdropBreakpoint: 0.3,
//       handle: true
//     });

//     await modal.present();
//   }


async openLoginModal() {
  const modal = await this.modalCtrl.create({
    component: LoginModalComponent,
    cssClass: 'login-sheet-modal',
    initialBreakpoint: 0.5,
    breakpoints: [0, 0.5, 1],
    backdropBreakpoint: 0.3,
    handle: true
  });

  await modal.present();

  const { role } = await modal.onDidDismiss();

  if (role === 'success') {
    this.router.navigateByUrl('/tabs/tab1', {
      replaceUrl: true
    });
  }
}



loginSuccess() {
  this.clearRedirectUrl();

  this.router.navigateByUrl('/tabs/tab1', {
    replaceUrl: true
  });
}


async openSavedModal(component: any) {

  const modal = await this.modalCtrl.create({
    component: component
  });

  await modal.present();

  return modal;
}
  // 🧹 (اختياري مهم) تسجيل خروج / Reset
  logout() {
    this.phone = '';
    localStorage.removeItem('otp');
    localStorage.removeItem('isGuest');
  }
}



