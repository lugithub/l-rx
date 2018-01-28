import { of } from 'rxjs/observable/of';
import { groupBy, mergeMap, scan, last } from 'rxjs/operators';

of({id: 1, name: 'aze1'},
   {id: 2, name: 'sf2'},
   {id: 2, name: 'dg2'},
   {id: 1, name: 'erg1'},
   {id: 1, name: 'df1'},
   {id: 2, name: 'sfqfb2'},
   {id: 3, name: 'qfs3'},
   {id: 2, name: 'qsgqsfg2'}
 ).pipe(
   groupBy(p => p.id)
)
.subscribe(group => {
  console.log(group);
  group.pipe(
    scan((acc, cur) => [...acc, cur], []),
    last()
  )
  .subscribe(console.log);
});
