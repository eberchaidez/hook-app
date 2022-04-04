import { memo } from 'react'

export const Small = memo(({ value }) => {
  console.log('mostrado small')

  return (
    <small>{value}</small>
  )
})
