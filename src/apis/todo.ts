import { Instance } from './instance'
import { TodoType } from '../components/TodoList/types'

export const createTodoRequest = async (todo: string): Promise<TodoType> => {
  const { data } = await Instance.post('/todos', { todo })
  return data
}

export const getTodosRequest = async (): Promise<TodoType[]> => {
  const { data } = await Instance.get('/todos')
  return data
}

export const updateTodoRequest = async (
  id: number,
  todo: string,
  isCompleted: boolean
): Promise<TodoType> => {
  const { data } = await Instance.put(`/todos/${id}`, { todo, isCompleted })
  return data
}

export const deleteTodoRequest = async (id: number) => {
  return Instance.delete(`/todos/${id}`)
}
