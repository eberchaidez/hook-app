import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
  const { state: counter, increment } = useCounter(1)

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { author, quote } = !!data && data[0]

  return (
    <div>
      <h1>Braking Bads Quotes</h1>
      <hr />

      {
        loading
          ? (
            <div className='alert alert-info text-center'>
              loading...
            </div>
            )
          : (
            <figure className='text-end'>
              <blockquote className='blockquote'>
                <p>{quote}</p>
              </blockquote>
              <figcaption className='blockquote-footer'>
                <cite title='Source Title'>{author}</cite>
              </figcaption>
            </figure>
            )
      }

      <button
        className='btn btn-primary'
        onClick={increment}
      >
        Siguente quote
      </button>

    </div>
  )
}
