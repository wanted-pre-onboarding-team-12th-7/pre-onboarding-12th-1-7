import { useState } from 'react'

const ExampleCustomHook = () => {
  const [sampleState, setSampleState] = useState('')
  return { sampleState, setSampleState }
}

export default ExampleCustomHook
