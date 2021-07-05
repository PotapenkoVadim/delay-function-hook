# Delay Function Hook
[![npm version](https://badge.fury.io/js/delay-function-hook.svg)](https://www.npmjs.com/package/delay-function-hook)

A React Hook component delays the execution of your function. If your function is called a second time then the first call will be canceled.
The function return promise and you can use construction then/catch.
  - a small function
  - implemented in `typescript`
  - ***no dependencies***


## Installation
```bash
    #npm
    $ npm install delay-function-hook
    
    #yarn
    $ yarn add delay-function-hook
```


## Usage

```js
import React from 'react';
import { useDelayFunction } from 'delay-function-hook/lib';

export default function App() {
  const delay = useDelayFunction();

  const searchDataByQueryText = queryText => {
    console.log('Run search data by: ' + queryText);

    return 'complete';
  }

  const handleKeyUp = (event) => {
    const userText = event.target.value;

    delay(searchDataByQueryText, 1500, userText)
      .then(result => console.log('Result: ' + result))
      .catch(error => console.error('Error: ' + error));
  };

  return (
    <div className="App">
      <textarea onKeyUp={handleKeyUp} />
    </div>
  );
}

```

![](view.gif)

## Params
The hook returns a function. The function return a promise and accepts arguments:
  * **`callback`: Function *(required)*;**
  * **`milliseconds`: number *(required)*;**
  * Your list arguments?: any;
