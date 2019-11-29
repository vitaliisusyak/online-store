import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {SuitsService} from './suits.service';

@Component({
  selector: 'app-suits',
  templateUrl: './suits.component.html',
  styleUrls: ['./suits.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuitsComponent implements OnInit {
  suits: object;
  showSpinner: boolean;

  constructor(private suitsService: SuitsService, private cd: ChangeDetectorRef) {
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
