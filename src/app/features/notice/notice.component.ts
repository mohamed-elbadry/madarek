import { Component, OnInit } from '@angular/core';
import { IonHeader, IonContent } from "@ionic/angular/standalone";
import { HeaderComponent } from "src/app/shared/header/header.component";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
  imports: [IonHeader, HeaderComponent, IonContent],
})
export class NoticeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
