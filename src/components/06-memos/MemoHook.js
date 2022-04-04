import { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

export const MemoHook = () => {
  const { state: counter, increment } = useCounter(100)
  const [show, setShow] = useState(true)

  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log('.i..')
    }

    return `${iteraciones} iteraciones realizadas.`
  }

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter:  <small>{counter}</small>  </h3>
      <hr />
      <p> {memoProcesoPesado} </p>
      <button
        className='btn btn-outline-primary'
        onClick={increment}
      >
        +1
      </button>
      <button
        className='btn btn-outline-danger'
        onClick={() => {
          setShow(!show)
        }}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
