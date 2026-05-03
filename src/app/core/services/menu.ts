import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuState = new BehaviorSubject<boolean>(false);
  menuState$ = this.menuState.asObservable();

  constructor(private authService: AuthService) {}

  openMenu() {

    // 👇 لو مش Guest → افتح menu
    if (this.authService.isGuestUser()) {
      this.menuState.next(true);
    }

    // ❌ لو Guest: مفيش حاجة تحصل هنا
  }

  closeMenu() {
    this.menuState.next(false);
  }
}