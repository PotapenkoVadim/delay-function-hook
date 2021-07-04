# Delay Function Hook
[![npm version](https://badge.fury.io/js/delay-function-hook.svg)](https://www.npmjs.com/package/delay-function-hook)

A React Hook component delays the execution of your function. If your function is called a second time then the first call will be canceled.
  - a small function
  - implemented in `typescript`
  - ***no dependencies***

![](view.gif)


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

  const searchDataByQueryText = (queryText) => console.log('Run search data by: ' + queryText);

  const handleKeyUp = (event) => {
    const userText = event.target.value;

    delay(searchDataByQueryText, 1500, userText);
  };

  return (
    <div className="App">
      <textarea onKeyUp={handleKeyUp} />
    </div>
  );
}


```


## Params
  * **`callback`: Function *(required)*;**
  * **`delay`: number *(required)*;**
  * **`yourArguments`: any[] *(required)*;**
