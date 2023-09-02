import { NgModule } from '@angular/core';
import { MessageService } from './services/message.service';
import { CommonModule } from '@angular/common';
import { HandleErrors } from './handlers/errors-handlers';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [CommonModule],
  exports: [ProductCardComponent],
  providers: [MessageService, HandleErrors],
})
export class SharedModule {}
