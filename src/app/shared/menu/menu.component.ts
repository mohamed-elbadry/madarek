import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonButtons, IonBadge } from '@ionic/angular/standalone';
import { MenuService } from '../../core/services/menu';
import { AuthService } from 'src/app/core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    CommonModule,
    IonButton,
    IonButtons,
    IonBadge
  ]
})
export class MenuComponent implements OnInit {

  isMenuOpen = false;

  constructor(private menuService: MenuService,private authService: AuthService,private router: Router) {}

  ngOnInit() {
    this.menuService.menuState$.subscribe((state) => {
      this.isMenuOpen = state;
    });
  }

  closeMenu() {
    this.menuService.closeMenu();
  }

  gopage() {
    console.log('go page');
  }

  openEdit() {
    console.log('edit');
  }
  logout() {
    this.authService.logout();
    this.menuService.closeMenu();
    this.router.navigate(['/tabs/tab1']);
  }
}