
import { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

import '../02-useEffect/effects.css'

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  const increment = useCallback(
    () => {
      setCounter(c => c + 1)
    },
    [setCounter]
  )

  useEffect(() => {

  }, [increment])

  return (
    <div>
      <h1>use CallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  )
}
