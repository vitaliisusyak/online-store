import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ShirtsService } from './shirts.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShirtsComponent implements OnInit {
  shirts: object;
  showSpinner: boolean;

  constructor(private shirtsService: ShirtsService, private cd: ChangeDetectorRef) {
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
