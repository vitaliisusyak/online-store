import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { AccessoriesService } from './accessories.service';
import { BaseComponent } from '@shared-components/abstract-component/base-component.component';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessoriesComponent extends BaseComponent implements OnInit {
  accessories: object;

  constructor(private accessoriesService: AccessoriesService, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.showSpinner = true;
    this.accessoriesService.getJSON().subscribe(data => {
      this.accessories = data.accessories;
      this.showSpinner = false;
      this.cd.markForCheck();
    });
  }
}
