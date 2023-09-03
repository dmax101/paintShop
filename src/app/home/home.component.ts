import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/services/auth-service.service';
import { Observable, catchError } from 'rxjs';
import { PaintRepositoryService } from './services/paint-repository.service';
import { HandleErrors } from '../shared/handlers/errors-handlers';

export interface IPaint {
  id: number;
  name: String;
  year: number;
  color: string;
  pantone_value: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  paintList: IPaint[] = []

  constructor(
    private authService: AuthServiceService,
    private paintRepo: PaintRepositoryService,
    private handleError: HandleErrors
  ) {}

  ngOnInit(): void {
    this.paintRepo.getPaints()
    .pipe(catchError(this.handleError.handleError))
    .subscribe((result) => {
      if(result) {
        this.paintList = result.data
      }
    })
  }

  onSignOut() {
    this.authService.logout();
  }


}
