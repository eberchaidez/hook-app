import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const ConterWithCustomHook = () => {
  const { state: counter, increment, decrement, reset } = useCounter(100)

  return (
    <>
      <h1>Conter With CustomHook: {counter}</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={increment}
      >
        +1
      </button>
      <button
        className='btn btn-default'
        onClick={reset}
      >
        reset
      </button>
      <button
        className='btn btn-danger'
        onClick={decrement}
      >
        -1
      </button>
    </>
  )
}
