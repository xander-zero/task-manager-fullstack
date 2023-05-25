export function sortTodos(todos) {
  const sortedDate = {};
  todos.map((todo) => {
    if (!sortedDate[todo.status]) sortedDate[todo.status] = [];

    sortedDate[todo.status].push(todo);
  });

  return sortedDate;
}
