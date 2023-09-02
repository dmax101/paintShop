import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutes } from './auth/auth.routing';
import { MessageService } from './shared/services/message.service';
import { AuthServiceService } from './auth/services/auth-service.service';
import { HandleErrors } from './shared/handlers/errors-handlers';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthRoutes, AuthModule, SharedModule],
  providers: [AuthServiceService, MessageService, HandleErrors],
  bootstrap: [AppComponent],
})
export class AppModule {}
