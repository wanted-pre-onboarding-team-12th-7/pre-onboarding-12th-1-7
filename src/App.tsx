import { createGlobalStyle, styled } from 'styled-components'
import PageRouter from './pages/PageRouter'
import AuthProvider from './AuthProvider'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html,body{
    height:100%
  }
  #root{
    width:100%;
    height:100%;
    color: ${({ theme }) => theme.colors.black};
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  button{
    cursor: pointer;
  }
`

function App() {
  return (
    <AuthProvider>
      <CommonLayout>
        <GlobalStyle />
        <PageRouter />
      </CommonLayout>
    </AuthProvider>
  )
}

const CommonLayout = styled.div`
  width: 100%;
  height: 100%;
`

export default App
