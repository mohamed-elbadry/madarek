import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  // 🧹 (اختياري مهم) تسجيل خروج / Reset
  logout() {
    this.phone = '';
    localStorage.removeItem('otp');
    localStorage.removeItem('isGuest');
  }
}



