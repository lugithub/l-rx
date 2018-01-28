import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';

import { concatMap, take } from 'rxjs/operators';

var clicks = fromEvent(document, 'click');
var result = clicks.pipe(
  concatMap(ev => interval(1000).pipe(
    take(3)
  ))
);
result.subscribe(x => console.log(x));
