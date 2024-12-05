import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);

  const loggedInUser = sessionStorage.getItem('loggedInUser');
  if (loggedInUser) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
