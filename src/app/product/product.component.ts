import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public productName: string = "продукт"
  public product: number = 0;
  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe(d => 
          this.product = Number.parseInt(d.get("id") || "0"));
  }
}
