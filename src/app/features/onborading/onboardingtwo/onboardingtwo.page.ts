import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-onboardingtwo',
  templateUrl: './onboardingtwo.page.html',
  styleUrls: ['./onboardingtwo.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ]
})
export class OnboardingtwoPage {}