import { Component, OnInit } from '@angular/core';
import { IonHeader, IonContent, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge } from "@ionic/angular/standalone";
import { HeaderComponent } from "src/app/shared/header/header.component";

@Component({
  selector: 'app-consultant-details',
  templateUrl: './consultant-details.component.html',
  styleUrls: ['./consultant-details.component.scss'],
  imports: [IonHeader, HeaderComponent, IonContent, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge],
})
export class ConsultantDetailsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
