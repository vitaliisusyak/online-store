import {ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef} from '@angular/core';

import { JacketsService } from './jackets.service';

@Component({
  selector: 'app-jackets',
  templateUrl: './jackets.component.html',
  styleUrls: ['./jackets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JacketsComponent implements OnInit {
  jackets: object;
  showSpinner: boolean;

  constructor(private jacketsService: JacketsService, private cd: ChangeDetectorRef) {
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
