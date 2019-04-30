import test from 'ava'
import { of } from 'rxjs'
import { map, filter } from 'rxjs/operators'

function sum (a, b) {
  return a + b
}
test('foo is being tested', t => {
  t.pass()
})
test('handles observables', t => {
  t.plan(3)
  return of(1, 2, 3, 4, 5, 6)
    .pipe(filter(x => x % 2 === 1),map(() => t.pass()))
    .subscribe(x => console.log(x))
})
test('sum of 2 numbers', t => {
  t.plan(2)
  t.pass('this assertion passed')
  t.is(sum(1, 2), 3)
})
