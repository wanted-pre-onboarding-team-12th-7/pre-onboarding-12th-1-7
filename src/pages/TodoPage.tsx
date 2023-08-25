import { styled } from 'styled-components'
import { PageWrapper } from './PageLayout'
import { useAuthContext } from '../AuthProvider'
import TodoList from '../components/TodoList/TodoList'

function TodoPage() {
  const { updateAuth } = useAuthContext()

  return (
    <PageWrapper>
      <PageTitle>투두리스트 페이지입니다.</PageTitle>
      <PageBody>
        <TodoList>
          <TodoList.Head />
          <TodoList.Body />
        </TodoList>
      </PageBody>
      <button
        onClick={() => {
          updateAuth({ action: 'sign-out' })
        }}
      >
        로그아웃
      </button>
    </PageWrapper>
  )
}

export default TodoPage

const PageTitle = styled.h1`
  margin-bottom: 10px;
`

const PageBody = styled.section`
  width: 80%;
`
