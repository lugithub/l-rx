// import { map, take, combineAll } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

var button = document.querySelector('button');
Observable.fromEvent(button, 'click')
  .subscribe(() => console.log('Clicked!'));


// import { fromEvent } from 'rxjs/observable/fromEvent';
//
// var button = document.querySelector('button');
// fromEvent(button, 'click')
//   .subscribe(() => console.log('Clicked!'));
