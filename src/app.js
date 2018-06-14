import { Observable, interval, timer, Subscription, of } from "rxjs";
import { combineLatest, map, take, takeUntil } from "rxjs/operators";

var observable = Observable.create(function subscribe(observer) {
  try {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  } catch (err) {
    observer.error(err); // delivers an error if it caught one
  }

  return () => {
    console.log('unsubscribe');
  }
});

observable.subscribe(n => {
  throw new Error(n);
}, console.error, console.log);
