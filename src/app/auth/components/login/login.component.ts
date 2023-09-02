import { HttpErrorResponse } from '@angular/common/http';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError, Subscription, Observable } from 'rxjs';
import {
  IMessage,
  MessageService,
} from 'src/app/shared/services/message.service';
import { HandleErrors } from 'src/app/shared/handlers/errors-handlers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.min(8), Validators.required]),
  });

  message$: Observable<IMessage> = MessageService.getMessage();

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private handleError: HandleErrors
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onChange(): void {
    console.log(this.formGroup.controls);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.authService
        .login(this.formGroup.value)
        .pipe(catchError(this.handleError.handleError))
        .subscribe((result) => {
          if ('token' in result) {
            localStorage.setItem('token', result.token);
            this.router.navigate(['home']);
          }
        });
    }
  }
}
