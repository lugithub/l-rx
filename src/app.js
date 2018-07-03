import {
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
  catchError,
  combineLatest,
  concat,
  map,
  mapTo,
  merge,
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

interval(1000).pipe(
  take(3)
).forEach(console.log).then(() => console.log('all right'));

