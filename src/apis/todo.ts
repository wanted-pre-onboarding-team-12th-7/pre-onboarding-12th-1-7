import { AuthInstance } from './instance'
import { TodoType } from '../components/TodoList/types'

export const createTodoRequest = async (todo: string): Promise<TodoType> => {
  const { data } = await AuthInstance.post('/todos', { todo })
  return data
}

export const getTodosRequest = async (): Promise<TodoType[]> => {
  const { data } = await AuthInstance.get('/todos')
  return data
}

export const updateTodoRequest = async (
  id: number,
  todo: string,
  isCompleted: boolean
): Promise<TodoType> => {
  const { data } = await AuthInstance.put(`/todos/${id}`, { todo, isCompleted })
  return data
}

export const deleteTodoRequest = async (id: number) => {
  return AuthInstance.delete(`/todos/${id}`)
}
