import {ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef} from '@angular/core';

import {UtilityJacketsService} from './utility-jackets.service';

@Component({
  selector: 'app-utility-jackets',
  templateUrl: './utility-jackets.component.html',
  styleUrls: ['./utility-jackets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UtilityJacketsComponent implements OnInit {
  utilityJackets: object;
  showSpinner: boolean;

  constructor(private utilityJacketsService: UtilityJacketsService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.showSpinner = true;
    this.utilityJacketsService.getJSON().subscribe(data => {
      this.utilityJackets = data.utilityJackets;
      this.cd.markForCheck();
      this.showSpinner = false;
    });
  }

}
