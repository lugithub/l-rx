import { of, throwError } from 'rxjs';
import { map, mergeMap, scan, catchError, filter } from 'rxjs/operators';

const source = of(0);

source.pipe(
  map(x => x + x),
  mergeMap(n => of(n + 1, n + 2).pipe(
    filter(x => x % 1 == 0),
    scan((acc, x) => acc + x, 0),
  )),
  catchError(err => of(`error ${err} found`)),
 ).subscribe(console.log); 
