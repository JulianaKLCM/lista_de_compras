import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return new Observable<boolean>((observer) => {
    const loggedInUser = sessionStorage.getItem('loggedInUser');

    if (loggedInUser) {
      observer.next(true);
      observer.complete();
    } else {
      router.navigate(['/login']);
      observer.next(false);
      observer.complete();
    }
  });
};
