import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AccessoriesService } from "../accessories.service";

@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.component.html',
  styleUrls: ['./accessory.component.css']
})

export class AccessoryComponent implements OnInit {
  private id: number;
  private product$: Observable<any>;
  private notExistingProductError = null;

  constructor(private activatedRoute: ActivatedRoute,
              private accessoryService: AccessoriesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.product$ = this.accessoryService.getProductById(this.id)
      .pipe(
        catchError( err => {
          this.notExistingProductError = err.error.message;
          this.router.navigate(['../../page-not-found'], {relativeTo: this.route});
          return throwError(err);
        })
      )
  }
}
