import { marbles } from "rxjs-marbles/jest";
import { map } from "rxjs/operators";

describe("basic", () => {

    it("should support marble tests without values", marbles(m => {

        const source =  m.hot("--^-a-b-c-|");
        const subs =            "^-------!";
        const expected = m.cold("--b-c-d-|");

        const destination = source.pipe(
            map(value => String.fromCharCode(value.charCodeAt(0) + 1))
        );
        m.expect(destination).toBeObservable(expected);
        m.expect(source).toHaveSubscriptions(subs);
    }));

});
