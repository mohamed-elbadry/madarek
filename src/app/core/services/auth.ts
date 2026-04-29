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

  // 🔐 OTP
  private otpError: string = '';

  setOtpError(msg: string) {
    this.otpError = msg;
  }

  getOtpError() {
    return this.otpError;
  }

  // ✅ أضف دي (كانت ناقصة)
  setOtp(otp: string) {
    localStorage.setItem('otp', otp);
  }

  getOtp(): string {
    return localStorage.getItem('otp') || '';
  }

  isOtpValid(): boolean {
    return this.getOtp() === '1234';
  }

  private isGuest: boolean = false;

setGuest(value: boolean) {
  this.isGuest = value;
}

isGuestUser(): boolean {
  return this.isGuest;
}
}