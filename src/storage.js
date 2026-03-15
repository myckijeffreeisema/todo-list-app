
/**
 * Salva as tarefas no localStorage
 * @param {object} todos
 */
export const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

/**
 * Retorna a lista de tarefas salvas 
 * @returns {Array}
 */
export const listTodos = () => {
    return JSON.parse(localStorage.getItem("todos")) ?? []
}