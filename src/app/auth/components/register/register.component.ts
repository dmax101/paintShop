import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import {
  IMessage,
  MessageService,
} from 'src/app/shared/services/message.service';
import { HandleErrors } from 'src/app/shared/handlers/errors-handlers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
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
        .register(this.formGroup.value)
        .pipe(catchError(this.handleError.handleError))
        .subscribe((result) => {
          if ('token' in result) {
            localStorage.setItem('userId', result.id);
            localStorage.setItem('token', result.token);
            this.router.navigate(['home']);
          }
        });
    }
  }
}
