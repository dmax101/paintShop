import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'auth/login', component: LoginComponent },
      { path: 'auth/register', component: RegisterComponent },
    ],
  },
];

export const AuthRoutes = RouterModule.forChild(routes);
