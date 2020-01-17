import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { JacketsService } from './jackets.service';
import { BaseComponent } from '@shared/components';

@Component({
  selector: 'app-jackets',
  templateUrl: './jackets.component.html',
  styleUrls: ['./jackets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JacketsComponent extends BaseComponent implements OnInit {
  jackets: object;
  showSpinner: boolean;

  constructor(private jacketsService: JacketsService, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.showSpinner = true;
    this.jacketsService.getJSON().subscribe(data => {
      this.jackets = data.jackets;
      this.cd.markForCheck();
      this.showSpinner = false;
    });
  }

}
