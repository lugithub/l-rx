import { interval } from 'rxjs/observable/interval';

// import 'rxjs/add/operator/map';
// interval(1000).map(
//   x => x + '!'
// ).subscribe(console.log, console.error, console.log);

import {
  map,
  catchError,
  tap
} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
interval(1000).pipe(
  tap(x => {
    if (x === 3) {
      throw 'error' + x;
    }
    console.log('tap', x);}),
  //catchError((error, caught) => caught),
  catchError(error => of(100)),
  map(x => x + '!'),

).subscribe(console.log, console.error, console.log);
