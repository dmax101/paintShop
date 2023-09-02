import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth/services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private authService:AuthServiceService) {}

  onSignOut() {
    alert("vazando!")
    this.authService.logout()
  }

}
