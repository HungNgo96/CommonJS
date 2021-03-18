export const all = (arr, fn = Boolean) => arr.every(fn);

// all([4, 2, 3], x => x > 1); // true
// all([1, 2, 3]); // true

export const allEqual = (arr) => arr.every((val) => val === arr[0]);

// allEqual([1, 2, 3, 4, 5, 6]); // false
// allEqual([1, 1, 1, 1]); // true

export const approximatelyEqual = (v1, v2, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon;

// approximatelyEqual(Math.PI / 2.0, 1.5708); // true

export const arrayToCSV = (arr, delimiter = ',') =>
  arr.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join('\n');

// arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
// arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```

export const arrayToHtmlList = (arr, listID) =>
  ((el) => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map((item) => `<li>${item}</li>`).join(''))
  ))();

// arrayToHtmlList(['item 1', 'item 2'], 'myListID');

export const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
//    var elements = attempt(function(selector) {
//     return document.querySelectorAll(selector);
//    }, '>_>');
//    if (elements instanceof Error) elements = []; // elements = []

export const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;

// average(...[1, 2, 3]); // 2
// average(1, 2, 3); // 2

export const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0) / arr.length;

// averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
// averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5

export const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
    [],
    [],
  ]);
// bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]);
// [ ['beep', 'boop', 'bar'], ['foo'] ]

export const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [
    [],
    [],
  ]);

// bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b');
// [ ['beep', 'boop', 'bar'], ['foo'] ]

export const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);

// bottomVisible(); // true

export const byteSize = (str) => new Blob([str]).size;

// byteSize('😀'); // 4
// byteSize('Hello World'); // 11

export const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');

// capitalize('fooBar'); // 'FooBar'
// capitalize('fooBar', true); // 'Foobar'

export const capitalizeEveryWord = (str) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

// capitalizeEveryWord('hello world!'); // 'Hello World!'

export const castArray = (val) => (Array.isArray(val) ? val : [val]);

// castArray('foo'); // ['foo']
// castArray([1]); // [1]

export const compact = (arr) => arr.filter(Boolean);

// compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
// [ 1, 2, 3, 'a', 's', 34 ]

export const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
// countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

const fs = require('fs');
export const createDirIfNotExists = (dir) =>
  !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;
// createDirIfNotExists('test');

export const currentURL = () => window.location.href;

// currentURL(); // 'https://medium.com/@fatosmorina'

export const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// dayOfYear(new Date()); // 272

export const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('');

// decapitalize('FooBar'); // 'fooBar'
// decapitalize('FooBar'); // 'fooBar'

export const deepFlatten = (arr) =>
  [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));

// deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

export const defaults = (obj, ...defs) =>
  Object.assign({}, obj, ...defs.reverse(), obj);

// defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }

export const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

// defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

export const degreesToRads = (deg) => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708

export const difference = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};

//    difference([1, 2, 3], [1, 2, 4]); // [3]

export const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter((x) => !s.has(fn(x)));
};

//    differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
//    differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]

export const differenceWith = (arr, val, comp) =>
  arr.filter((a) => val.findIndex((b) => comp(a, b)) === -1);

// differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b));
// [1, 1.2]

export const digitize = (n) => [...`${n}`].map((i) => parseInt(i));

// digitize(431); // [4, 3, 1]

export const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

// distance(1, 1, 2, 3); // 2.23606797749979

export const drop = (arr, n = 1) => arr.slice(n);

// drop([1, 2, 3]); // [2,3]
// drop([1, 2, 3], 2); // [3]
// drop([1, 2, 3], 42); // []

export const dropRight = (arr, n = 1) => arr.slice(0, -n);

// dropRight([1, 2, 3]); // [1,2]
// dropRight([1, 2, 3], 2); // [1]
// dropRight([1, 2, 3], 42); // []

export const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

//    dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]

export const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

// dropWhile([1, 2, 3, 4], (n) => n >= 3); // [3,4]

export const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);

// elementContains(document.querySelector('head'), document.querySelector('title')); // true
// elementContains(document.querySelector('body'), document.querySelector('body')); // false

export const filterNonUnique = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

// filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]

export const findKey = (obj, fn) =>
  Object.keys(obj).find((key) => fn(obj[key], key, obj));

// findKey(
//  {
//  barney: { age: 36, active: true },
//  fred: { age: 40, active: false },
//  pebbles: { age: 1, active: true }
//  },
//  o => o['active']
// ); // 'barney'

export const findLast = (arr, fn) => arr.filter(fn).pop();

// findLast([1, 2, 3, 4], n => n % 2 === 1); // 3k

export const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );

// flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
// flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]

export const forEachRight = (arr, callback) =>
  arr.slice(0).reverse().forEach(callback);

// forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'

export const forOwn = (obj, fn) =>
  Object.keys(obj).forEach((key) => fn(obj[key], key, obj));
// forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1

export const functionName = (fn) => (console.debug(fn.name), fn);

// functionName(Math.max); // max (logged in debug channel of console)

export const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);

// getColonTimeFromDate(new Date()); // "08:38:00"

export const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

// getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2

export const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

// getStyle(document.querySelector('p'), 'font-size'); // '16px'

export const getType = (v) =>
  v === undefined
    ? 'undefined'
    : v === null
    ? 'null'
    : v.constructor.name.toLowerCase();

// getType(new Set([1, 2, 3])); // 'set'

export const hasClass = (el, className) => el.classList.contains(className);
// hasClass(document.querySelector('p.special'), 'special'); // true

export const head = (arr) => arr[0];

// head([1, 2, 3]); // 1

export const hide = (...el) =>
  [...el].forEach((e) => (e.style.display = 'none'));
// hide(document.querySelectorAll('img')); // Hides all <img> elements on the page

export const httpsRedirect = () => {
  if (location.protocol !== 'https:')
    location.replace('https://' + location.href.split('//')[1]);
};

//    httpsRedirect();

export const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

// indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
// indexOfAll([1, 2, 3], 4); // []

export const initial = (arr) => arr.slice(0, -1);

// initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
// initial([1, 2, 3]); // [1,2]

export const insertAfter = (el, htmlString) =>
  el.insertAdjacentHTML('afterend', htmlString);

// insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>

export const insertBefore = (el, htmlString) =>
  el.insertAdjacentHTML('beforebegin', htmlString);

// insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>

export const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};

//    intersection([1, 2, 3], [4, 3, 2]); // [2, 3]

export const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter((x) => s.has(fn(x)));
};

// intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]

export const intersectionWith = (a, b, comp) =>
  a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1);

// intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]

export const is = (type, val) =>
  ![, null].includes(val) && val.constructor === type;

// is(Array, [1]); // true
// is(ArrayBuffer, new ArrayBuffer()); // true
// is(Map, new Map()); // true
// is(RegExp, /./g); // true
// is(Set, new Set()); // true
// is(WeakMap, new WeakMap()); // true
// is(WeakSet, new WeakSet()); // true
// is(String, ''); // true
// is(String, new String('')); // true
// is(Number, 1); // true
// is(Number, new Number(1)); // true
// is(Boolean, true); // true
// is(Boolean, new Boolean(true)); // true

export const isAfterDate = (dateA, dateB) => dateA > dateB;

// isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true

export const isAnagram = (str1, str2) => {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

//    isAnagram('iceman', 'cinema'); // true

export const isArrayLike = (obj) =>
  obj != null && typeof obj[Symbol.iterator] === 'function';

// isArrayLike(document.querySelectorAll('.className')); // true
// isArrayLike('abc'); // true
// isArrayLike(null); // false

export const isBeforeDate = (dateA, dateB) => dateA < dateB;

// isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true

export const isBoolean = (val) => typeof val === 'boolean';

// isBoolean(null); // false
// isBoolean(false); // true

export const isBrowser = () =>
  ![typeof window, typeof document].includes('undefined');

// isBrowser(); // true (browser)
// isBrowser(); // false (Node)

export const isBrowserTabFocused = () => !document.hidden;

// isBrowserTabFocused(); // true

export const isLowerCase = (str) => str === str.toLowerCase();

// isLowerCase('abc'); // true
// isLowerCase('a3@$'); // true
// isLowerCase('Ab4'); // false

export const isNil = (val) => val === undefined || val === null;

// isNil(null); // true
// isNil(undefined); // true

export const isNull = (val) => val === null;

// isNull(null); // true

export const isNumber = (val) => typeof val === 'number';

// isNumber('1'); // false
// isNumber(1); // true

export const isObject = (obj) => obj === Object(obj);

// isObject([1, 2, 3, 4]); // true
// isObject([]); // true
// isObject(['Hello!']); // true
// isObject({ a: 1 }); // true
// isObject({}); // true
// isObject(true); // false

export const isObjectLike = (val) => val !== null && typeof val === 'object';

// isObjectLike({}); // true
// isObjectLike([1, 2, 3]); // true
// isObjectLike(x => x); // false
// isObjectLike(null); // false

export const isPlainObject = (val) =>
  !!val && typeof val === 'object' && val.constructor === Object;

// isPlainObject({ a: 1 }); // true
// isPlainObject(new Map()); // false

export const isPromiseLike = (obj) =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';

// isPromiseLike({
//  then: function() {
//  return '';
//  }
// }); // true
// isPromiseLike(null); // false
// isPromiseLike({}); // false

export const isSameDate = (dateA, dateB) =>
  dateA.toISOString() === dateB.toISOString();

// isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true

export const isString = (val) => typeof val === 'string';

// isString('10'); // true

export const isSymbol = (val) => typeof val === 'symbol';

// isSymbol(Symbol('x')); // true

export const isUndefined = (val) => val === undefined;

// isUndefined(undefined); // true

export const isUpperCase = (str) => str === str.toUpperCase();

// isUpperCase('ABC'); // true
// isLowerCase('A3@$'); // true
// isLowerCase('aB4'); // false

export const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

//    isValidJSON('{"name":"Adam","age":20}'); // true
//    isValidJSON('{"name":"Adam",age:"20"}'); // false
//    isValidJSON(null); // true

export const last = (arr) => arr[arr.length - 1];

// last([1, 2, 3]); // 3

export const matches = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

// matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
// matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false

export const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

// const array = [
//  new Date(2017, 4, 13),
//  new Date(2018, 2, 12),
//  new Date(2016, 0, 10),
//  new Date(2016, 0, 9)
// ];
// maxDate(array); // 2018-03-11T22:00:00.000Z

export const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

// maxN([1, 2, 3]); // [3]
// maxN([1, 2, 3], 2); // [3,2]

export const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

// const array = [
//  new Date(2017, 4, 13),
//  new Date(2018, 2, 12),
//  new Date(2016, 0, 10),
//  new Date(2016, 0, 9)
// ];
// minDate(array); // 2016-01-08T22:00:00.000Z

export const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

// minN([1, 2, 3]); // [1]
// minN([1, 2, 3], 2); // [1,2]

export const negate = (func) => (...args) => !func(...args);

// [1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]

export const nodeListToArray = (nodeList) => [...nodeList];

// nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]

export const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);

// pad('cat', 8); // ' cat '
// pad(String(42), 6, '0'); // '004200'
// pad('foobar', 3); // 'foobar'

export const radsToDegrees = (rad) => (rad * 180.0) / Math.PI;

// radsToDegrees(Math.PI / 2); // 90

export const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

//    randomHexColorCode(); // "#e34155"

export const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

// randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]

export const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// randomIntegerInRange(0, 5); // 3

export const randomNumberInRange = (min, max) =>
  Math.random() * (max - min) + min;

// randomNumberInRange(2, 10); // 6.0211363285087005

// const fs = require('fs');
export const readFileLines = (filename) =>
  fs.readFileSync(filename).toString('UTF8').split('\n');

// let arr = readFileLines('test.txt');
// console.log(arr); // ['line1', 'line2', 'line3']

export const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);

// redirect('https://google.com');

export const reverseString = (str) => [...str].reverse().join('');

// reverseString('foobar'); // 'raboof'

export const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

// round(1.005, 2); // 1.01

export const runPromisesInSeries = (ps) =>
  ps.reduce((p, next) => p.then(next), Promise.resolve());
export const delay = (d) => new Promise((r) => setTimeout(r, d));

// runPromisesInSeries([() => delay(1000), () => delay(2000)]);
// Executes each promise sequentially, taking a total of 3 seconds to complete

export const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

// sample([3, 7, 9, 11]); // 9

export const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

//    sampleSize([1, 2, 3], 2); // [3,1]
//    sampleSize([1, 2, 3], 4); // [2,3,1]

export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

//    scrollToTop();

export const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

// serializeCookie('foo', 'bar'); // 'foo=bar'

export const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

// setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px

export const shallowClone = (obj) => Object.assign({}, obj);

// const a = { x: true, y: 1 };
// const b = shallowClone(a); // a !== b

export const show = (...el) => [...el].forEach((e) => (e.style.display = ''));

// show(...document.querySelectorAll('img')); // Shows all <img> elements on the page

export const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

//    const foo = [1, 2, 3];
//    shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function sleepyWork() {
//  console.log("I'm going to sleep for 1 second.");
//  await sleep(1000);
//  console.log('I woke up after 1 second.');
// }

export const smoothScroll = (element) =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth',
  });

// smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
// smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar

export const sortCharactersInString = (str) =>
  [...str].sort((a, b) => a.localeCompare(b)).join('');

// sortCharactersInString('cabbage'); // 'aabbceg'

export const splitLines = (str) => str.split(/\r?\n/);

// splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']

export const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, '');

// stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'

export const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

// sum(1, 2, 3, 4); // 10
// sum(...[1, 2, 3, 4]); // 10

export const tail = (arr) => (arr.length > 1 ? arr.slice(1) : arr);

// tail([1, 2, 3]); // [2,3]
// tail([1]); // [1]

export const take = (arr, n = 1) => arr.slice(0, n);

// take([1, 2, 3], 5); // [1, 2, 3]
// take([1, 2, 3], 0); // []

export const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

// takeRight([1, 2, 3], 2); // [ 2, 3 ]
// takeRight([1, 2, 3]); // [3]

export const timeTaken = (callback) => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

//    timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms

export const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

//    var output = '';
//    times(5, i => (output += i));
//    console.log(output); // 01234

export const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, {
    style: 'currency',
    currency: curr,
  }).format(n);

// toCurrency(123456.789, 'EUR'); // €123,456.79 | currency: Euro | currencyLangFormat: Local
// toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79 | currency: US Dollar | currencyLangFormat: English (United States)
// toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
// toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
// toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish

export const toDecimalMark = (num) => num.toLocaleString('en-US');

// toDecimalMark(12305030388.9087); // "12,305,030,388.909"

export const toggleClass = (el, className) => el.classList.toggle(className);

// toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore

export const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

// tomorrow(); // 2019-09-08 (if current date is 2018-09-08)

export const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

//    var f = n => (n > 50 ? false : [-n, n + 10]);
//    unfold(f, 10); // [-10, -20, -30, -40, -50]

export const union = (a, b) => Array.from(new Set([...a, ...b]));

// union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]

export const uniqueElements = (arr) => [...new Set(arr)];

// uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]

export const validateNumber = (n) =>
  !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

// validateNumber('10'); // true

export const words = (str, pattern = /[^a-zA-Z-]+/) =>
  str.split(pattern).filter(Boolean);

// words('I love javaScript!!'); // ["I", "love", "javaScript"]
// words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]

export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

//https://anonystick.com/blog-developer/debounce-vs-throttle-javascript-202005261421546
export const   debounce =(fn, delay) => {
        return args => {
            clearTimeout(fn.id)

            fn.id = setTimeout(() => {
                fn.call(this, args)
            }, delay)
        }
    }

export const  throttle =  (fn, delay) => {
      return args => {
          if (fn.id) return

          fn.id = setTimeout(() => {
              fn.call(this, args)
              clearTimeout(fn.id)
              fn.id = null
          }, delay)
      }
  }
