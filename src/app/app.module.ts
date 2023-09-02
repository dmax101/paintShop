import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutes } from './auth/auth.routing';
import { AuthServiceService } from './auth/services/auth-service.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthRoutes, AuthModule],
  providers: [AuthServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
