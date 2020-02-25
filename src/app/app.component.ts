import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'online-store';

  constructor(private location: Location,
              private router: Router) {
  }

  ngOnInit(): void {
  }

}
