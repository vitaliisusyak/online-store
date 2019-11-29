import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { AccessoriesService } from './accessories.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessoriesComponent implements OnInit {
  accessories: any;
  showSpinner: boolean;

  constructor(private accessoriesService: AccessoriesService, private cd: ChangeDetectorRef) {
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
