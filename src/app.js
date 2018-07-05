import {
  EMPTY,  
  defer,
  fromEvent,
  Observable,
  Subject,
  ReplaySubject,
  interval,
  timer,
  Subscriber,
  Subscription,
  throwError,
  of ,
  pipe
} from "rxjs";
import {
  isEmpty,
  catchError,
  combineLatest,
  concat,
  delay,
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
  tap
} from "rxjs/operators";
import {
  create,
  operators
} from "rxjs-spy";
import {
  tag
} from "rxjs/operators";
import { POINT_CONVERSION_COMPRESSED } from "constants";

const source = defer(() => of(
  Math.floor(Math.random() * 100)
)).pipe(
  // delay(0)
);

function observer(name) {
  return {
    next: value => console.log(`observer ${name}: ${value}`),
    complete: () => console.log(`observer ${name}: complete`)
  };
}

// const m = source.pipe(
//   multicast(new Subject()),
//   refCount()
// );

const s = new Subject();

const m = source.pipe(
  multicast(() => s),
  refCount()
);

m.subscribe(observer("a"));
m.subscribe(observer("b"));




