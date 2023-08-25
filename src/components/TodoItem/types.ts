import { TodoType } from '../TodoList/types'

export interface TodoItemProps extends Omit<TodoType, 'userId'> {
  updateTodo: (id: number, todo: string, isCompleted: boolean) => void
  deleteTodo: (id: number) => void
}
