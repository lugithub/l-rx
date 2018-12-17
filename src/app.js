import { ajax } from 'rxjs/ajax';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, reduce } from 'rxjs/operators';

// from([1, 2, 3]).pipe(
//   mergeMap(value => of(value * value))
// ).subscribe(console.log);


// const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
// );

// const obs$ = ajax.get(`https://api.github.com/users?per_page=5`).pipe(
// );

const obs$ = ajax.getJSON(`https://api.github.com/users?per_page=5&access_token=40bdb61d42b696353ae27cef533e53b9a8140feb`).pipe(
  mergeMap(users => from(users)),
  mergeMap(user => ajax.getJSON(`https://api.github.com/users/${user.login}/followers?access_token=40bdb61d42b696353ae27cef533e53b9a8140feb`)),
  mergeMap(followers => from(followers)),
  reduce(function(acc, val) {
    return Object.assign({}, acc, {
          [val.login]: val
        });
  }, {}),
  catchError(e => of(e.message))
);

obs$.subscribe(console.log);