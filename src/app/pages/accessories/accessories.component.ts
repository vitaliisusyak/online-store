import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import { AccessoriesService } from './accessories.service';
import { BaseComponent } from '@shared/components';


@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessoriesComponent extends BaseComponent implements OnInit {
  private accessories;


  constructor(private accessoriesService: AccessoriesService,
              private cd: ChangeDetectorRef,
              private router: Router,
              private route: ActivatedRoute) {
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
