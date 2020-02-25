import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { AccessoriesService } from './accessories.service';
import { BaseComponent } from '@shared/components';
import { IProduct } from '@shared/interfaces/product-interface'

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessoriesComponent extends BaseComponent implements OnInit {
  accessories: IProduct;

  constructor(private accessoriesService: AccessoriesService, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.showSpinner = true;
    this.accessoriesService.getJSON().subscribe(data => {
      this.accessories = data.accessories;
      console.log(this.accessories);
      this.showSpinner = false;
      this.cd.markForCheck();
    });
  }
}
