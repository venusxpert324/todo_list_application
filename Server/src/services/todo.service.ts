import { TodoEntity } from "../entities";
import { AppDataSouce } from "../db";

export const createTodo = async (data) => {
  const { user_id, title, description, status, due_date } = data;
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const todo = todoRepository.create({ user_id, title, description, status, due_date });
  await todoRepository.save(todo);
  return todo;
};

export const updateTodo = async (data) => {
  const { id, title, description, status, due_date } = data;
  const cond = {id:id};
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const findTodo = await todoRepository.findOne({ where: { ...cond } });
  if (!findTodo) return null;
  findTodo.title = title;
  findTodo.description = description;
  findTodo.status = status;
  findTodo.due_date = due_date;
  await todoRepository.save(findTodo);
  return findTodo;
};

export const getOneTodo = async (data) => {
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const findTodo = await todoRepository.findOne({ where: { ...data } });
  if (!findTodo) return null;
  return findTodo;
};

export const deleteTodoById = async (data) => {
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const findTodo = await todoRepository.findOne({ where: { ...data } });
  if (!findTodo) return null;
  return todoRepository.softRemove(findTodo);
};

export const getAllTodo = async (data) => {
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const [findTodo, count] = await todoRepository.findAndCount({ where: { ...data } });
  if (!findTodo) return null;
  return findTodo;
};
