import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { TrousersService } from './trousers.service';

@Component({
  selector: 'app-trousers',
  templateUrl: './trousers.component.html',
  styleUrls: ['./trousers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrousersComponent implements OnInit {
  trousers: object;
  showSpinner: boolean;

  constructor(private trousersService: TrousersService, private cd: ChangeDetectorRef ) {
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
