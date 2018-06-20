import { fromEvent, Observable, Subject, ReplaySubject, interval, timer, Subscription, of, pipe } from "rxjs";
import { combineLatest, map, mapTo, multicast, pluck, publish, refCount, scan, share, shareReplay, take, takeUntil, tap } from "rxjs/operators";

const complicatedLogic = pipe(
  map(x => ++x),
  map(x => x * 10),
  take(5)
);

let obs = interval(1000).pipe(complicatedLogic);
obs.subscribe(console.log, console.error, () => console.log('complete'));

