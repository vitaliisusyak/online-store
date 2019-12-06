import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ShirtsService } from './shirts.service';
import { BaseComponent } from '@shared-components/abstract-component/base-component.component';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShirtsComponent extends BaseComponent implements OnInit {
  shirts: object;

  constructor(private shirtsService: ShirtsService, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.showSpinner = true;
    this.shirtsService.getJSON().subscribe(data => {
      this.shirts = data.shirts;
      this.cd.markForCheck();
      this.showSpinner = false;
    });
  }

}
