import { styled } from 'styled-components'

import PageRouter from './pages/PageRouter'

function App() {
  return (
    <CommonLayout>
      <PageRouter />
    </CommonLayout>
  )
}

const CommonLayout = styled.div`
  width: 100%;
  height: 100vh;
`

export default App
