import React from 'react'

function Debug({data}: {data:any}) {
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}

export default Debug