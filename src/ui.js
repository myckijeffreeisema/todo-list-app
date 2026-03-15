
/**
 * Cria o card de tarefa
 * @param {object} todo 
 * @returns 
 */
export const createTodoCard = (todo) => {
    const card = document.createElement("li")
    card.classList.add("card")
    card.dataset.id = todo.id

    const todoText = document.createElement("span")
    todoText.textContent = todo.todo

    if (todo.done) {
        todoText.style.color = "#2bff00"
    }


    const actions = document.createElement("div")
    actions.classList.add("actions")

    const editButton = document.createElement("button")
    editButton.classList.add("edit-btn")
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`

    const doneButton = document.createElement("button")
    doneButton.classList.add("done-btn")
    doneButton.innerHTML = `<i class="fa-solid fa-check"></i>`


    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-btn")
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`

    actions.append(editButton)
    actions.append(doneButton)
    actions.append(deleteButton)

    card.append(todoText)
    card.append(actions)

    return card

}

/**
 * 
 * @param {Array} todos 
 */
export const listTodoCards = (todos) => {
    const container = document.querySelector(".list")
    container.textContent = ``
    const frag = document.createDocumentFragment()
    todos.forEach((todo) => {
        const card = createTodoCard(todo)
        frag.append(card)
    })

    container.append(frag)
}