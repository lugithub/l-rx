import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';

import { buffer, bufferCount } from 'rxjs/operators';

var clicks = fromEvent(document, 'click');
var intervals = interval(1000);
var buffered = intervals.pipe(
  bufferCount(3, 5)
);

buffered.subscribe(x => console.log(x));
