import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonInput,
  IonCheckbox
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth';
import { ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mobilecode',
  templateUrl: './mobilecode.page.html',
  styleUrls: ['./mobilecode.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    RouterLink,
    IonLabel,
    IonInput,
    IonCheckbox
  ]
})
export class MobilecodePage implements OnInit {

  phone: string = '';
  agreeTerms: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  // 🔥 Reset كل مرة الصفحة تدخل
  ionViewWillEnter() {
    this.phone = '';
    this.agreeTerms = false;
  }

  // 🔥 زر إرسال الكود
  sendCode() {

    if (!this.phone || this.phone.trim().length === 0) {
      this.showToast('ادخل رقم الجوال');
      return;
    }

    if (!this.agreeTerms) {
      this.showToast('يجب الموافقة على الشروط والأحكام');
      return;
    }

    const phone = this.phone.trim();

    this.auth.setPhone(phone);

    if (phone === '123456') {
      this.router.navigate(['/verfiymobilecode']);
    }
    else if (phone === '123456789') {
      this.router.navigate(['/tabs/tab1']);
    }
    else {
      this.showToast('رقم غير مسموح');
    }
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

  // 👤 Guest mode
  goToConsultant() {
    this.router.navigate(['/tabs/tab1']);
  }
}