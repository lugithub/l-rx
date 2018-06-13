import { Observable, interval, timer, Subscription, of } from "rxjs";
import { combineLatest, map, take, takeUntil } from "rxjs/operators";

var observable = Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  const timerId = setTimeout(() => {
    observer.next(4);
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
});

subscription.add({
  unsubscribe() {
    console.log('teardown 1');
  }
})

subscription.add({
  unsubscribe() {
    console.log('teardown 2');
  }
});

console.log('just after subscribe');

subscription.unsubscribe();
