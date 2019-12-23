import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { AccessoriesService } from './accessories.service';
import { BaseComponent } from '@shared/components';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessoriesComponent extends BaseComponent implements OnInit {
  accessories: object;

  constructor(private accessoriesService: AccessoriesService, private cd: ChangeDetectorRef, private http: HttpClient) {
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

  getJackets() {
    this.http.get('jackets').subscribe(data => {
      console.log(data);
    });
  }
}
