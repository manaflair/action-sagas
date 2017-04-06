# [![](/logo.png?raw=true)](https://github.com/manaflair/action-sagas)

> Add extra capabilities to your action creators by allowing them to dispatch sagas

[![](https://img.shields.io/npm/v/@manaflair/action-sagas.svg)]() [![](https://img.shields.io/npm/l/@manaflair/action-sagas.svg)]()

[Check out our other OSS projects!](https://manaflair.github.io)

## Installation

```
$> npm install --save @manaflair/action-sagas
```

## Usage

```js
import { createSagaDispatcher }         from '@manaflair/action-sagas';
import { select, put }                  from 'redux-saga/effects';
import createSagaMiddleware }           from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

let sagaMiddleware = createSagaMiddleware();
let sagaDispatcher = createSagaDispatcher(sagaMiddleware);

let store = createStore(reducer, applyMiddleware(sagaDispatcher, sagaMiddleware));

store.dispatch(function * () {

    let counter = yield select(state => state.counter);

    yield put({ type: `SET_COUNTER`, value: counter + 1 });

});
```

## Why?

We felt like this approach could be a good way to customize an application by delegating some part of the logic to the action creator, instead of the application itself.

Note that because you can dispatch sagas doesn't mean that you should - doing so without consideration for the code architecture might contribute to make your code more difficult to understand and to maintain.

## Thanks

Most of this code has been originally designed by [Yassine Elouafi](https://github.com/yelouafi) on the [following thread](https://github.com/redux-saga/redux-saga/issues/123#issuecomment-189637424). We mainly packaged it into an easy-to-use module.

## License (MIT)

> **Copyright © 2016 Manaflair & Yassine Elouafi**
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
