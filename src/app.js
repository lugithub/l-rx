import { fromEvent, Observable, Subject, ReplaySubject, interval, timer, Subscription, of, pipe } from "rxjs";
import { catchError, combineLatest, map, mapTo, multicast, pluck, publish, refCount, retry, scan, share, shareReplay, take, takeUntil, tap } from "rxjs/operators";
import { create, operators } from "rxjs-spy";
import { tag } from "rxjs/operators";

create();
const { tag } = operators;

const source$ = interval(1000).pipe(share(), tag('source'));

const mapped$ = source$.pipe(map(x => {
  if (x === 1) {
    throw new Error('oops');
  }
  return x;
}
), tag('mapped')).pipe(catchError(err => of(err)));

source$.subscribe(x => console.log('A', x));
mapped$.subscribe(x => console.log('B', x));
source$.subscribe(x => console.log('C', x));
