import { interval } from 'rxjs/observable/interval';

// import 'rxjs/add/operator/map';
// interval(1000).map(
//   x => x + '!'
// ).subscribe(console.log, console.error, console.log);

import {
  map,
  exhaustMap,
  take,
  catchError,
  tap
} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
interval(100).pipe(
  exhaustMap(y => interval(1000).pipe(
    map(z => y +'-' + z),
    take(10)
  ))
).subscribe(console.log, console.error, console.log);
