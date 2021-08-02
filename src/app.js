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
  document.getElementById('status-sort').innerHTML = 'Status'
  document.getElementById('title-sort').innerHTML='Title'
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
  document.getElementById('status-sort').innerHTML = 'Status'
}

const sortByTitle = () => {
  todos.sort((a, b) => {
    var textA = a.text.toUpperCase();
    var textB = b.text.toUpperCase();
    if (textA < textB) {
      return -1;
    }
    if (textA > textB) {
      return 1;
    }
    return 0;
  })
  if (document.getElementById('title-sort').innerHTML.includes('Asc')){
    todos = todos.reverse()
    document.getElementById('title-sort').innerHTML='Title: Desc'
  }else{
    document.getElementById('title-sort').innerHTML='Title: Asc'
  }
  document.getElementById('status-sort').innerHTML = 'Status'
}

const sortByUnfinished = () => {
  if (document.getElementById('status-sort').innerHTML.includes('Unfinished first')) {
    todos.sort((a, b) => b.finished - a.finished)
    document.getElementById('status-sort').innerHTML='Status: Finished first'
  } else {
    todos.sort((a, b) => a.finished - b.finished)
    document.getElementById('status-sort').innerHTML='Status: Unfinished first'
  }
  document.getElementById('title-sort').innerHTML='Title'
}

const listTodosInUI = () => {
  document.getElementById('todos').innerHTML = ''
  todos.forEach((todo) => {
    let listElement = document.createElement('li')
    let heading = document.createElement('div')
    let text = document.createTextNode(todo.text + ' ')
    let space = document.createTextNode(' ')

    let deleteButton = document.createElement('button')
    deleteButton.className = 'btn'
    deleteButton.innerHTML = 'Delete'
    deleteButton.addEventListener('click', () => { deleteTodo(todo.id); listTodosInUI() })

    let toggleTodo = document.createElement('button')
    toggleTodo.className = 'btn'
    toggleTodo.innerHTML = todo.finished ? 'Finished' : 'Unfinished'
    toggleTodo.addEventListener('click', () => { toggleFinished(todo.id); listTodosInUI() })

    heading.style.textDecoration = todo.finished ? 'line-through' : 'none'
    listElement.style.paddingTop = '20px'

    heading.appendChild(text)
    listElement.appendChild(heading)
    listElement.appendChild(deleteButton)
    listElement.appendChild(space)
    listElement.appendChild(toggleTodo)

    document.getElementById('todos').appendChild(listElement)

  })
}
