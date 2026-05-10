import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authservice: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const type = route.data['type'];
    const phone = this.authservice.getPhone()?.trim();

    // 📱 PHONE ROUTE CHECK
    if (type === 'phone') {

      // السماح لرقم الأدمن أو consultant
      if (this.authservice.isAllowed() || phone === '123456789') {
        return true;
      } else {
        this.router.navigate(['/']); // رجوع للصفحة الرئيسية أو login
        return false;
      }
    }

    // 🔐 OTP ROUTE CHECK
    if (type === 'otp') {

      const otp = this.authservice.getOtp();

      if (!otp || otp.trim().length === 0) {
        this.authservice.setOtpError('ادخل الرمز');
        return false;
      }

      if (otp.trim().length !== 4) {
        this.authservice.setOtpError('ادخل الرمز بشكل صحيح');
        return false;
      }

      if (!this.authservice.isOtpValid()) {
        this.authservice.setOtpError('الرمز غير صحيح');
        return false;
      }

      return true;
    }
if (type === 'auth') {

  if (!this.authservice.isGuestUser()) {

    // فتح المودال
   this.authservice.setRedirectUrl(state.url);

    // ✅ فتح Login Modal
    this.authservice.openLoginModal();

    return false; // يمنع الدخول
  }

  return true;
}
    // 🚫 أي حالة غير معروفة
    this.router.navigate(['/']);
    return false;
  }
}







