import { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {
  const { state: counter, increment } = useCounter(1)

  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { quote } = !!data && data[0]

  const pTag = useRef()

  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>Braking Bads Quotes</h1>
      <hr />

      <figure className='text-end'>
        <blockquote className='blockquote'>
          <p ref={pTag}>{quote}</p>
        </blockquote>
      </figure>

      <button
        className='btn btn-primary'
        onClick={increment}
      >
        Siguente quote
      </button>

    </div>
  )
}
