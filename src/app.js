let todos = []

const addTodo = () => {
  const todo = document.getElementById('input').value
  document.getElementById('input').innerHTML = ''
  todos.concat({
    name: todo,
    finished: false
  })
}