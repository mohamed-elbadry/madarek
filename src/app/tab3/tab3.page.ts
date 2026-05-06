import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonProgressBar, IonButton, IonModal, IonButtons, IonItem, IonCheckbox, NavController, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { call, person, settings } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTabs, IonTabBar,
    IonTabButton, IonIcon, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonCardContent, IonProgressBar, IonButton, IonModal,
    IonButtons, IonItem, IonCheckbox, RouterModule,
    HeaderComponent,
    IonBadge
]
})
export class Tab3Page implements OnInit {
  canDismiss: boolean = true;

  public progress = 0.82;
  public progressone = 0.12;


  constructor(private navCtrl: NavController) { 
    addIcons({person, call, settings});
  }

  ngOnInit() {}

  filter(selectedType: string) {
    const cards = document.querySelectorAll('ion-card');

    cards.forEach(card => {
      const type = card.getAttribute('data-type');
      if (selectedType === 'all' || type === selectedType) {
        (card as HTMLElement).style.display = 'block';
      } else {
        (card as HTMLElement).style.display = 'none';
      }
    });

    // لتحديث الكلاس النشط
    const filters = document.querySelectorAll('.filter li');
    filters.forEach(f => f.classList.remove('active'));
    const activeFilter = Array.from(filters).find(f => f.textContent?.trim() === selectedType || (selectedType==='all' && f.textContent?.trim()==='الكل'));
    activeFilter?.classList.add('active');
  }

  // ← أضف هذه الدالة لفتح صفحة Training
  goToTraining() {
    this.navCtrl.navigateForward('/trainning');  // تأكد أن path مطابق للـ routes
  }
}