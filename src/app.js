import { ajax } from 'rxjs/observable/dom/ajax';
import { catchError } from 'rxjs/operators/catchError';
import { of } from 'rxjs/observable/of';

var observable = ajax({
      url : 'https://www.google.com/',
      //crossDomain: true,
      createXHR: function () {
        return new XMLHttpRequest();
     }
}).pipe(
  catchError(x => of(x.message))
);

observable.subscribe(console.log);
