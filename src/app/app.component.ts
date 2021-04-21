import { Component } from '@angular/core';
import {CarDetailsService} from "./service/car-details.service";
import {combineLatest} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-tracker-api';

  constructor(private carDetailsService: CarDetailsService) {
  }
  devices$ = this.carDetailsService.devices$;
  positions$ = this.carDetailsService.positions$;

  // Use the link below to see how to implement the observable
  // https://github.com/DeborahK/Angular-DD/blob/master/APM/src/app/products/product-list/product-list.component.html
  vm$ = combineLatest(this.devices$, this.positions$).pipe(map((devices, positions) => {
    console.log(devices, positions);
  }));


  monitorDevices() {

  }

  devicePositions() {
    this.vm$.subscribe(res => console.table);
  }
}
