Predefine or postdefine expressions arguments

# pdef
Predefinition and postdefinition

## Installation

###  NPM

```sh
npm install --save pdef
```


## Usage

```js
const postdef = require('pdef').postdef;
const predef = require('pdef').predef;
// or
import {postdef, predef} from 'pdef';


const squarePost = (a, b, c) => postdef(
  ({p}) => Math.sqrt(p * (p-a) * (p-b) * (p-c))
).where({p: (a + b + c)/2});

const squarePre = (a,b,c) => predef({p: (a+b+c)/2}).in(({p}) => Math.sqrt(p * (p-a) * (p-b) * (p-c)));


squarePost(7, 8, 9);
// => 26.832815729997478
squarePost(7, 8, 9) === squarePre(7, 8, 9);
// => true
```
