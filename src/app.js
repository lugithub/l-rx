import { fromEvent, Observable, Subject, ReplaySubject, interval, timer, Subscription, of, pipe } from "rxjs";
import { catchError, combineLatest, map, mapTo, multicast, pluck, publish, refCount, retry, scan, share, shareReplay, take, takeUntil, tap } from "rxjs/operators";

const source$ = interval(1000).pipe(share());

const mapped$ = source$.pipe(map(x => {
  if (x === 1) {
    throw new Error('oops');
  }
  return x;
}
));

source$.subscribe(x => console.log('A', x));
mapped$.subscribe(x => console.log('B', x));
source$.subscribe(x => console.log('C', x));
