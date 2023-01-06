import { Component, VERSION } from '@angular/core';
import { OnInit } from '@angular/core';
import {
  Observable,
  of,
  from,
  fromEvent,
  interval,
  Subject,
  Subscription,
} from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  ngOnInit() {
    let observer1 = new Observable((observer) => {
      observer.next(Math.random());
    });
    observer1.subscribe((data) => {
      console.log(data + ' ' + 'data inside observable');
    });
    observer1.subscribe((data) => {
      console.log(data + ' ' + 'data inside observable');
    });

    /*****Now data ouside observable the value remains, means same data for both observables as like in multicasting ************ */
    let x = Math.random();
    let observer2 = new Observable((observer) => {
      observer.next(x);
    });
    observer2.subscribe((data) => {
      console.log(data + ' ' + 'data outside observable');
    });
    observer2.subscribe((data) => {
      console.log(data + ' ' + 'data outside observable');
    });

    /****************************************************************/
    // document click generates data outside of fromEvent
    let observable1 = fromEvent(document, 'click');

    let observer11 = observable1.subscribe((data) => {
      console.log((data as PointerEvent).clientX + ' -');
    });
    let observer12 = observable1.subscribe((data) => {
      console.log((data as PointerEvent).clientX + ' -');
    });
  }
}
