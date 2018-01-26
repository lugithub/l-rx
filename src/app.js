import { fromEvent } from 'rxjs/observable/fromEvent';
import { scan, throttleTime, map } from 'rxjs/operators';

var button = document.querySelector('button');
fromEvent(button, 'click')
  .pipe(
    throttleTime(3000),
    map(event => event.clientX),
    scan((sum, value) => sum + value, 0))
  .subscribe(sum => console.log(`${sum}`));
