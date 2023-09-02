import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.formGroup.valid) {
      this.authService.register(this.formGroup.value).subscribe((result) => {

        if(result instanceof HttpErrorResponse) {
          alert(result.error.error)
        }

        if ('token' in result) {
          localStorage.setItem('token', result.token)
        }
      });
    }

  }

}
