import { Component, Input, OnInit } from '@angular/core';
import { IPaint } from 'src/app/home/home.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() paint: IPaint = {
    id: 0,
    name: "Teste",
    year: 200,
    color: "#000000",
    pantone_value: "Pantone"
  }

}
