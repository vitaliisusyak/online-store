import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { TrousersService } from './trousers.service';
import { BaseComponent } from '@shared-components/abstract-component/base-component.component';

@Component({
  selector: 'app-trousers',
  templateUrl: './trousers.component.html',
  styleUrls: ['./trousers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrousersComponent extends BaseComponent implements OnInit {
  trousers: object;

  constructor(private trousersService: TrousersService, private cd: ChangeDetectorRef ) {
    super();
  }

  ngOnInit() {
    this.showSpinner = true;
    this.trousersService.getJSON().subscribe(data => {
      this.trousers = data.trousers;
      this.cd.markForCheck();
      this.showSpinner = false;
    });
  }

}
