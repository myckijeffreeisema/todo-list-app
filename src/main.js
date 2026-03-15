import { createTodoObject, extractFormData } from "./helper.js";
import { listTodos, saveTodos } from "./storage.js";
import { deleteTodo, getTodo, listFilteredTodos, totalPendingTodo, updateTodo } from "./todo.js";
import { listTodoCards } from "./ui.js";
import { validateTodo } from "./validator.js";


const form = document.querySelector("form");
const filters = document.querySelector(".filters");
const list = document.querySelector(".list");
const totalPending = document.querySelector("#total-pending");


let currentId = null
let currentFilter = "all"
let todos = listTodos()


const updateUI = () => {
    saveTodos(todos)
    totalPending.innerHTML = totalPendingTodo(todos)
    listTodoCards(listFilteredTodos(currentFilter, todos))
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { todo } = extractFormData(e);
    const errors = validateTodo(todo);
    if (!errors) {
        if (!currentId) {
            const newObject = createTodoObject(todo, false);
            todos.push(newObject)
        } else {
            const savedTodo = getTodo(Number(currentId), todos)
            savedTodo.todo = todo
            todos = updateTodo(savedTodo, todos)
            currentId = null
        }

        e.target.reset()
        updateUI()
    } else {
        alert(errors)
    }

})

list.addEventListener("click", (e) => {
    const card = e.target.closest(".card")
    if (!card) return;
    const cardId = card.dataset.id
    const btn = e.target
    const todo = getTodo(Number(cardId), todos)

    if (btn.classList.contains("done-btn")) {
        todo.done = !todo.done
        todos = updateTodo(todo, todos)
        updateUI()
    }

    if (btn.classList.contains("delete-btn")) {
        todos = deleteTodo(todo, todos)
        updateUI()
        return;
    }

    if (btn.classList.contains("edit-btn")) {
        form.todo.value = todo.todo
        form.todo.focus()
        currentId = cardId
    }
})

filters.addEventListener("click", (e) => {
    const filter = e.target.closest("[data-filter]")
    if (!filter) return;

    const validFilters = ["all", "pending", "done"]
    let nextFilter = filter.dataset.filter

    if (!validFilters.includes(nextFilter)) return;

    Array.from(filters.children).forEach(el => el.classList.remove("selected"))

    currentFilter = nextFilter
    filter.classList.add("selected")
    updateUI()

})


updateUI()