import { Observable, interval, timer, Subscription, of } from "rxjs";
import { combineLatest, map, take, takeUntil } from "rxjs/operators";

var observable = Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  const timerId = setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 3000);

  return function unsubscribe() {
    clearTimeout(timerId);
  };
});

console.log('just before subscribe');

const subscription = observable.subscribe({
  next: x => console.log('got value ' + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
}).add(() => console.log('teardown'));

console.log('just after subscribe');

