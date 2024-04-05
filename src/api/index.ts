import axios from 'axios';
import { TodoType } from '../types/types';

export const api = axios.create({
  baseURL: 'https://6543322701b5e279de1ffee0.mockapi.io/',
});

export const addTodo = async (
  title: string,
  setterState: React.Dispatch<React.SetStateAction<TodoType[]>>
): Promise<void> => {
  const data = (await api.post('todos', { title })).data;
  setterState((prev) => [...prev, data]);
};
export const deleteTodo = async (
  id: string,
  setterState: React.Dispatch<React.SetStateAction<TodoType[]>>
): Promise<void> => {
  await api.delete(`todos/${id}`);
  setterState((prev) => prev.filter((todo) => todo.id !== id));
};
