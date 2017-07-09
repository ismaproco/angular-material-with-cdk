import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myControl = new FormControl();
   options = [
    'One',
    'Two',
    'Three'
   ];

   filteredOptions: Observable<string[]>;

   ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges
         .startWith(null)
         .map(val => val ? this.filter(val) : this.options.slice());
   }

   filter(val: string): string[] {
      return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option)); 
   }


}
