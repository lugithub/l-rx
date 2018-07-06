import {
  EMPTY,  
  defer,
  fromEvent,
  range,
  Observable,
  Subject,
  ReplaySubject,
  interval,
  timer,
  Subscriber,
  Subscription,
  throwError,
  of,
  pipe
} from "rxjs";
import {
  isEmpty,
  catchError,
  combineLatest,
  concat,
  delay,
  filter,
  map,
  mapTo,
  merge,
  mergeMap,
  multicast,
  pluck,
  publish,
  refCount,
  retry,
  scan,
  share,
  shareReplay,
  switchMap,
  take,
  takeUntil,
  tap,
  toArray
} from "rxjs/operators";
import {
  create,
  operators
} from "rxjs-spy";
import {
  tag
} from "rxjs/operators";

const value$ = range(0, 10).pipe(
  filter(x => x % 2 === 0),
  map(x => x + x),
  scan((acc, x) => acc + x, 0),
  toArray()
);

const value = value$.toPromise();
value.then(x => console.log(x));

