import { interval } from 'rxjs/observable/interval';

// import 'rxjs/add/operator/map';
// interval(1000).map(
//   x => x + '!'
// ).subscribe(console.log, console.error, console.log);

import {
  map
} from 'rxjs/operators';
interval(1000).pipe(
  map(x => x + '!')
).subscribe(console.log, console.error, console.log);
