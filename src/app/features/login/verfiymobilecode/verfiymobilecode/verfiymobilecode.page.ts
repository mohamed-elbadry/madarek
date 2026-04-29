import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInputOtp } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-verfiymobilecode',
  templateUrl: './verfiymobilecode.page.html',
  styleUrls: ['./verfiymobilecode.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonInputOtp,
    RouterLink
  ]
})
export class VerfiymobilecodePage implements OnInit {

  // مهم علشان ion-input-otp بيرجع array
  otp: string | string[] = '';

  constructor(
    private authservice: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  verifyOtp() {
    // نحول الـ OTP لـ string
    const otpValue = Array.isArray(this.otp) ? this.otp.join('') :String(this.otp);

    if (!otpValue || otpValue.length !== 4) {
      this.showToast('الكود ناقص');
      console.log('OTP Invalid:', otpValue);
      return;
    }

    if (otpValue !== '1234') {
      this.showToast('الكود غلط');
      return;
    }

    // حفظ الكود
    this.authservice.setOtp(otpValue);

    console.log('OTP OK:', otpValue);

    // التوجيه للتاب
    this.router.navigate(['/tabs/tab1']);
  }

  // 🔔 Toast
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
       cssClass: 'custom-toast'
    });

    await toast.present();
  }
  ionViewWillEnter() {
  this.otp = '';
}
}