import { styled } from 'styled-components'
import { useTodoContext } from '../TodoList/TodoList'
import TodoItem from '../TodoItem/TodoItem'

function TodoListBody() {
  const { todos, updateTodo, deleteTodo } = useTodoContext()

  return (
    <StyledTodoListBody>
      <FlexUl>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </FlexUl>
    </StyledTodoListBody>
  )
}

export default TodoListBody

const StyledTodoListBody = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  overflow-y: auto;
`

const FlexUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`
