// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
// import 'rxjs/add/operator/combineAll';
//
// const source = Observable.interval(1000).take(2);
//
// const example = source.map(val =>
//   Observable.interval(1000)
//     .map(i => `Result (${val}): ${i}`)
//     .take(5)
// );
//
// const combined = example.combineAll();
//
// const subscribe = combined.subscribe(val => console.log(val));

import { interval } from 'rxjs/observable/interval';
import { map, take, combineAll } from 'rxjs/operators';

const source = interval(1000).pipe(
  take(2)
);

const example = source.pipe(
  map(val =>
    interval(1000).pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  )
);

const combined = example.pipe(
  combineAll()
);

const subscribe = combined.subscribe(val => console.log(val));
