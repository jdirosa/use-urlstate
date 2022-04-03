# use-url-state

>

[![NPM](https://img.shields.io/npm/v/use-urlstate.svg)](https://www.npmjs.com/package/use-urlstate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @jamesdirosa/use-urlstate
```

## Usage

```tsx
import React from 'react'
import { useUrlState } from 'use-urlstate'

interface User {
  name: string
  id: string
}

export const OtherHome = () => {
  const defaultUser: User = {
    name: 'james',
    id: '1234'
  }
  const [user, setUser] = useUrlState('user', defaultUser)

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <p>Name: {user?.name}</p>
          <p>Id: {user?.id}</p>
        </header>
      </div>
    </>
  )
}
```

## License

MIT © [jdirosa](https://github.com/jdirosa)
