import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [

  // 🔴 Redirect أول ما التطبيق يفتح
  {
    path: '',
    redirectTo: 'onboarding1',
    pathMatch: 'full'
  },
  {
    path:'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then(m => m.routes),
   
  },

  // 🟡 Onboarding
  {
    path: 'onboarding1',
    loadComponent: () =>
      import('./features/onborading/onboarding1/onboarding1.page')
        .then(m => m.Onboarding1Page)
  },
  {
    path: 'onboardingtwo',
    loadComponent: () =>
      import('./features/onborading/onboardingtwo/onboardingtwo.page')
        .then(m => m.OnboardingtwoPage)
  },
  {
    path: 'onboardingthree',
    loadComponent: () =>
      import('./features/onborading/onboardingthre/onboardingthre.page')
        .then(m => m.OnboardingthrePage)
  },

  // 📱 OTP Page (محمي بالـ phone type)
  {
    path: 'verfiymobilecode',
    loadComponent: () =>
      import('./features/login/verfiymobilecode/verfiymobilecode/verfiymobilecode.page')
        .then(m => m.VerfiymobilecodePage),
    canActivate: [AuthGuard],
    data: { type: 'phone' }
  },

  // 🔐 OTP verification page
  {
    path: 'mobilecode',
    loadComponent: () =>
      import('./features/login/mobilecode/mobilecode/mobilecode.page')
        .then(m => m.MobilecodePage)
  },

  // 👨‍💼 Consultant module (لوحده)
  {
    path: 'consultant',
    loadChildren: () =>
      import('./consultant/tabs/tabs.routes').then(m => m.routes)
  }
];