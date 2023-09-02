import { HttpErrorResponse } from '@angular/common/http';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8)]),
  });

  message = {
    hidden: true,
    message: '',
  };

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.formGroup.valid) {
      this.authService
        .login(this.formGroup.value)
        .pipe(catchError(this.handleError))
        .subscribe((result) => {
          if (!result) {
            console.log('Fudeu!');
          }

          if ('token' in result) {
            localStorage.setItem('token', result.token);
            this.router.navigate(['home']);
          }
        });
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }

    this.message.hidden = false;
    this.message.message = error.error.error

    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
