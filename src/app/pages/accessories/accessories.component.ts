import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {AccessoriesService} from './accessories.service';
import {BaseComponent} from '@shared/components';


@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessoriesComponent extends BaseComponent implements OnInit {
  private accessories;


  constructor(private accessoriesService: AccessoriesService,
              private cd: ChangeDetectorRef) {
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
