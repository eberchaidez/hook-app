import { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {
  console.log('cargado')
  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        increment()
      }}
    >
      incrementar
    </button>
  )
})
