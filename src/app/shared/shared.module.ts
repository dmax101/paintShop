import { MessageService } from './services/message.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandleErrors } from './handlers/errors-handlers';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [MessageService, HandleErrors],
})
export class SharedModule {}
