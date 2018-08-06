import * as fromTodo from "./todo.actions";
import { Todo } from "./model/todo.model";
import { Acciones } from "./todo.actions";

const estadoInicial: Todo[] = [];
export function todoReducer(state = estadoInicial, action: fromTodo.Acciones) {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    default:
      return state;
  }
}
