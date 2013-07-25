# universal-hash-function

_Stability: 1 - [Experimental](https://github.com/tristanls/stability-index#stability-1---experimental)_

Universal hash function.

## Installation

    npm install universal-hash-function

## Overview

>If a malicious adversary chooses the keys to be hashed by some fixed hash function, then the adversary can choose n keys that all hash to the same slot, yielding an average retrieval time of _O(n)_. Any fixed hash function is vulnerable to such terrible worst-case behavior; the only effective way to improve the situation is to choose the hash function randomly in a way that is independent of the keys that are actually going to be stored. This approach, called universal hashing, can yield provably good performance on average, no matter which keys the adversary chooses.
>http://mitpress.mit.edu/books/introduction-algorithms

## Usage

`prime`, `numberOfHashSlots`, and `someKey` are all _Integers_.

```javascript
var uhf = require('universal-hash-function');

// prime should be such that the greatest integer value of someKey should be
// less than prime
// uhf(prime, numberOfHashSlots);
var hashFunc1 = uhf(17, 6);
var hashFunc2 = uhf(17, 6);
var hashFunc3 = uhf(17, 6);

// hashFunc(someKey)
hashFunc1(0); // -> 2
hashFunc2(0); // -> 1
hashFunc3(0); // -> 5

hashFunc1(1); // -> 3
hashFunc2(1); // -> 5
hashFunc3(1); // -> 1

hashFunc1(2); // -> 5
hashFunc2(2); // -> 2
hashFunc3(2); // -> 3
// etc...
```