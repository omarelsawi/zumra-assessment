let todos = []
let ID = 0

const addTodo = () => {
  const todo = document.getElementById('input').value
  document.getElementById('input').innerHTML = ''
  let thisID = ID++
  todos.concat({
    id: thisID,
    text: todo,
    finished: false
  })
}

const deleteTodo = (id) => {
  todos.filter((todo) => todo.id !== id)
}

const markAsFinished = (id) => {
  todos = todos.map((todo) => todo.finished = todo.id === id ? !todo.finished : todo.finished)
}

const sortByTitle = () => {
  todos.sort((a, b) => todos[a].text - todos[b].text)
}

const sortByUnfinished = () => {
  todos.sort((a, b) => todos[a].finished - todos[b].finished)
}

const listTodosInUI = ()=>{

}