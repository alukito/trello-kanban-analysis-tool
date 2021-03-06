import R from 'ramda';

// argsToArray :: (a, …) -> [a, …]
const argsToArray = R.unapply(R.identity);

// countByWith :: (a -> String) -> (String,Number -> {B: b, C: c}) -> [a] -> [{B: b, C: c}]
const countByWith = R.curry((prop, fn, data) => R.compose(
  R.map(R.apply(fn)),
  R.toPairs,
  R.countBy(prop)
)(data));

// groupByWith :: (a -> String) -> (String,[a] -> {B: b, C: c}) -> [a] -> [{B: b, C: c}]
const groupByWith = R.curry((prop, fn, data) => R.cond([
  [
    R.is(Array),
    R.compose(
        R.map(R.apply(fn)),
        R.toPairs,
        R.groupBy(prop)
      ),
  ],
    [R.T, R.always([])],
])(data));

// round :: Number -> Number
const round = (x) => Math.round(x * 100) / 100;

export {
  argsToArray,
  countByWith,
  groupByWith,
  round,
};
