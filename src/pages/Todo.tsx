import { useNavigate } from 'react-router-dom'
import TodoList from '../components/TodoList/TodoList'

function Todo() {
  const navigate = useNavigate()

  return (
    <div>
      투두리스트 페이지입니다.
      <TodoList />
      <button
        onClick={() => {
          localStorage.removeItem('accessToken')
          navigate(0)
        }}
      >
        accessToken 삭제
      </button>
    </div>
  )
}

export default Todo
