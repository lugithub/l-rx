import { defer } from 'rxjs/observable/defer';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';

var clicksOrInterval = defer(function () {
  if (Math.random() > 0.5) {
    return fromEvent(document, 'click');
  } else {
    return interval(1000);
  }
});

clicksOrInterval.subscribe(x => console.log(x));
