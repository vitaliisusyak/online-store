import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { SuitsService } from './suits.service';
import { BaseComponent } from '@shared-components/abstract-component/base-component.component';

@Component({
  selector: 'app-suits',
  templateUrl: './suits.component.html',
  styleUrls: ['./suits.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuitsComponent extends BaseComponent implements OnInit {
  suits: object;

  constructor(private suitsService: SuitsService, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.showSpinner = true;
    this.suitsService.getJSON().subscribe(data => {
      this.suits = data.suits;
      this.cd.markForCheck();
      this.showSpinner = false;
    });
  }
}
