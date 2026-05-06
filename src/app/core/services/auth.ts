import { Injectable } from '@angular/core';
import { LoginModalComponent } from 'src/app/features/login/modal/modal.component';
import { ModalController } from '@ionic/angular/standalone';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private modalCtrl: ModalController) { }
  // 📱 رقم الموبايل
  private phone: string = '';

  setPhone(phone: string) {
    this.phone = phone;
  }

  getPhone(): string {
    return this.phone;
  }

  isAllowed(): boolean {
    return this.phone === '123456';
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
  }

  // 🧹 (اختياري مهم) تسجيل خروج / Reset
  logout() {
    this.phone = '';
    localStorage.removeItem('otp');
    localStorage.removeItem('isGuest');
  }
}



