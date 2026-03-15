/**
 * Atualiza os dados de uma Tarefa
 * @param {object} newTodo 
 * @param {Array} todos 
 */
export const updateTodo = (newTodo, todos) => {
    return todos.map(todo => todo.id === newTodo.id ? {...todo, ...newTodo} : todo)
}

/**
 * Remove uma tarefa da lista
 * @param {object} todo 
 * @param {Array} todos 
 * @returns 
 */
export const deleteTodo = (todo, todos) => {
    return todos.filter(t => t.id !== todo.id)
}

/**
 * Busca uma tarefa por ID
 * @param {number} id 
 * @param {Array} todos 
 */
export const getTodo = (id, todos) => {
    return todos.find(t => t.id === id)
}

/**
 * Lista as tarefas aplicando filtros
 * @param {string} filter 
 * @param {Array} todos 
 */
export const listFilteredTodos = (filter, todos) => {
    if (filter === "pending") {
        return todos.filter(t => t.done === false)
    }
    if (filter === "done") {
        return todos.filter(t => t.done === true)
    }
    return todos
}

/**
 * Retorna o total de tarefas pendentes
 * @param {Array} todos 
 */
export const totalPendingTodo = (todos) => {
    return todos.filter(t => !t.done).length
}