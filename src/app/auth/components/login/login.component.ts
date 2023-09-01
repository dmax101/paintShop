import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {}

  onSubmit() {
    // if (this.formGroup.valid) {
    //   this.authService.login(this.formGroup.value).subscribe((result) => {
    //     if ('token' in result) {
    //       alert(result.token);
    //     }
    //   });
    // }

    console.log("foi carai");

  }
}
