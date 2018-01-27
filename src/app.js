import { Observable } from 'rxjs/Observable';
import { scan, throttleTime, map } from 'rxjs/operators';

var button = document.querySelector('button');
var observable = Observable.create(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  const id = setInterval(() => {
    observer.next(4);
    observer.complete();
  }, 1000);

  return () => {
    clearInterval(id);
  };
});

const s = observable.subscribe(x => {
  console.log(x);
}, console.log, () => console.log('complete'));

setTimeout(() => {
  s.unsubscribe();
}, 10000);
