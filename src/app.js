import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/observable/interval';
import { empty } from 'rxjs/observable/empty';
import { mergeMap } from 'rxjs/operators/mergeMap';

var intervalObservable = interval(1000);
var result = intervalObservable.pipe(
  mergeMap(x =>
    x % 2 === 1 ? of('a', 'b', 'c') : empty()
  )
);
result.subscribe(x => console.log(x), console.log, () => console.log('complete'));
