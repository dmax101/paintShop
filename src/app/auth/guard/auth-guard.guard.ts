import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, Navigation } from '@angular/router';

export const authGuardGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = new Router();

  const token = localStorage.getItem('token')

  if(!token) {
    router.navigate(["/auth"])
    return false
  }

  return true;
};
