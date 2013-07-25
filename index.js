/*

index.js - universal hash function

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

// prime:             a prime number greater than the maximum value of a hash 
//                    key that will be given; in other words, if kMax is maximum 
//                    integer value of the key to be hashed, then pick prime 
//                    such that kMax < prime
// numberOfHashSlots: number of slots to hash to
var uhf = module.exports = function uhf (prime, numberOfHashSlots) {
    var a = Math.floor(Math.random() * (prime));         // {0, 1, ..., p-1}
    var b = Math.floor(Math.random() * (prime - 1) + 1); // {1, 2, ..., p-1}
    return function (someKey) {
        return ((a * someKey + b) % prime) % numberOfHashSlots;
    };
};