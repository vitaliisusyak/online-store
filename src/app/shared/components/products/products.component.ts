import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  @Input() products: object;
  searchResult: string;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  goToProduct(id: number) {
    this.router.navigate([id], {relativeTo: this.route});
  }
}
