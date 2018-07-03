import { marbles } from "rxjs-marbles/jest";
import { concat, debounceTime, delay, map, merge } from "rxjs/operators";

describe("basic", () => {

    xit("should support marble tests without values", marbles(m => {
        const a =   m.cold("--1--2--|");
        const asub =       "^-------!";

        const b =   m.cold(        "--3--|");
        const bsub =       "--------^----!";

        const expected =   "--1--2----3--|";
                    
        const result = a.pipe(concat(b));
        m.expect(result).toBeObservable(expected);
        m.expect(a).toHaveSubscriptions(asub);
        m.expect(b).toHaveSubscriptions(bsub);
    }));

    xit('hot', marbles(m => {
        const a =   m.cold("--1--2--|");
        const asub =       "^-------!";

        const b =    m.hot("^----3----4--|");
        const bsub =       "--------^----!";

        const expected =   "--1--2----4--|";

        
        
        const result = a.pipe(concat(b));

        m.expect(result).toBeObservable(expected);
        m.expect(a).toHaveSubscriptions(asub);
        m.expect(b).toHaveSubscriptions(bsub);
    }));

    xit('g', marbles(m => {
        const a =   m.cold("-1------2----|");
        const b =   m.cold("-3------4----|");
        const c =   m.cold("-5------6----|");

        const expected =   "-(135)--(246)|";

        const asub =     "^------------!";
        const bsub =     "^------------!";
        
        const result = a.pipe(merge(b, c));

        m.expect(result).toBeObservable(expected);
        // m.expect(a).toHaveSubscriptions(asub);
        // m.expect(b).toHaveSubscriptions(bsub);
    }));   


    it('delay', marbles(m => {
        const a =   m.cold("-1-----2---|");
        const asub =       "^------------!";

        const expected = "---1-----2---|";

        const result = a.pipe(
            delay(2)
        );

        m.expect(result).toBeObservable(expected);
        m.expect(a).toHaveSubscriptions(asub);
    }));      
});

