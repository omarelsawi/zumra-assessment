let todos = []
let ID = 0

document.getElementById('add-todo').addEventListener('click', () => { addTodo(); listTodosInUI() })
document.getElementById('title-sort').addEventListener('click', () => { sortByTitle(); listTodosInUI() })
document.getElementById('status-sort').addEventListener('click', () => { sortByUnfinished(); listTodosInUI() })

function addTodo() {
  const todo = document.getElementById('input').value
  document.getElementById('input').value = ''
  let thisID = ID++
  todos = todos.concat({
    id: thisID,
    text: todo,
    finished: false
  })
}

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id)
}

const toggleFinished = (id) => {
  todos = todos.map((todo) => {
    return {
      ...todo,
      finished: todo.id === id ? !todo.finished : todo.finished
    }
  })
}

const sortByTitle = () => {
  todos.sort((a, b) => a.text.toLowerCase().localeCompare() - b.text.toLowerCase().localeCompare())
}

const sortByUnfinished = () => {
  todos.sort((a, b) => a.finished - b.finished)
}

const listTodosInUI = () => {
  document.getElementById('todos').innerHTML = ''
  todos.forEach((todo) => {
    let listElement = document.createElement('li')
    let text = document.createTextNode(todo.text + ' ')

    let deleteButton = document.createElement('button')
    deleteButton.className = 'btn'
    deleteButton.innerHTML = 'Delete'
    deleteButton.addEventListener('click', () => { deleteTodo(todo.id); listTodosInUI() })

    let toggleTodo = document.createElement('button')
    toggleTodo.className = 'btn'
    toggleTodo.innerHTML = todo.finished ? 'Finished' : 'Unfinished'
    toggleTodo.addEventListener('click', () => { toggleFinished(todo.id); listTodosInUI() })

    listElement.style.textDecoration = todo.finished ? 'line-through' : 'none'

    listElement.appendChild(text)
    listElement.appendChild(deleteButton)
    listElement.appendChild(toggleTodo)

    document.getElementById('todos').appendChild(listElement)

  })
}
