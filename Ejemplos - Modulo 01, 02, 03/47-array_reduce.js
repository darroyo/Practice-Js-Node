

console.log();
console.log('[7, 4, 1, 23].reduce((acc, elem) =>  acc += elem, 0)                              // => ' 
	       + [7, 4, 1, 23].reduce((acc, elem) =>  acc += elem, 0));

console.log();
console.log('[4, 1, 4, 1, 4].sort().reduce((ac, el, i, a)  =>  el!==a[i-1] ? ac.concat(el) : ac, [])  // => [' 
	       + [4, 1, 4, 1, 4].sort().reduce((ac, el, i, a)  =>  el!==a[i-1] ? ac.concat(el) : ac, []) + "]");

console.log();
console.log('[4, 1, 4, 1, 4].sort()                                                            // => [' 
	       + [4, 1, 4, 1, 4].sort() + "]");
console.log('[1, 1, 4, 4, 4].reduce((ac, el, i, a)  =>  el!==a[i-1] ? ac.concat(el) : ac, [])  // => [' 
	       + [1, 1, 4, 4, 4].reduce((ac, el, i, a)  =>  el!==a[i-1] ? ac.concat(el) : ac, []) + "]");

