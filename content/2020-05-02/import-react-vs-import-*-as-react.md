---
title: import React from react vs import * as React from react 
date: 2020-05-02
path: /import-react-from-react-vs-import-*-as-react-from-react
---

 

React uses CommonJs module system so we cannot use
```jsx
import React from "react"
```

We can use this line and there is no error because Babel tries to take care of this so that we don't have to.
On typescript, we use `allowSyntheticDefaultImports` to true so this masks the above behavior.

The idea is you do not need to write code like this

```jsx
import * as React from "react"
import {Children} from "react"
```

Just use babel or typescript with `"allowSyntheticDefaultImports": true` to use the cleaner syntax. 