import { useNavigate } from 'react-router-dom'

function Todo() {
  const navigate = useNavigate()

  return (
    <div>
      투두리스트 페이지입니다.
      <button
        onClick={() => {
          localStorage.removeItem('access_token')
          navigate(0)
        }}
      >
        accessToken 삭제
      </button>
    </div>
  )
}

export default Todo
