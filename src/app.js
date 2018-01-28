import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';

import { exhaustMap, take } from 'rxjs/operators';

var clicks = fromEvent(document, 'click');
var result = clicks.pipe(
  exhaustMap(ev => interval(1000).pipe(
    take(3)
  ))
);
result.subscribe(x => console.log(x));
