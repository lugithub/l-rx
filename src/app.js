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

function defaultObservableIfEmpty(defaultObservable) {
  return source => source.pipe(
    publish(shared => shared.pipe(
      merge(
        shared.pipe(isEmpty()).pipe(
          mergeMap(isempty => isempty ?
            defaultObservable :
            EMPTY
          )
        ))
    )));
}

 defaultObservableIfEmpty(interval(1000))(EMPTY).subscribe(console.log);
 defaultObservableIfEmpty(interval(1000))(of(1)).subscribe(console.log);




