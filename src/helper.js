/**
 * Cria o objeto tarefa
 * @param {string} todo 
 * @param {boolean} done 
 * @returns {object}
 */
export const createTodoObject = (todo, done) => {
    const now = new Date()
    const id = now.getTime()
    return {
        id: id,
        todo: todo,
        done: done,
        createdAt: now.toUTCString()
    }
}

/**
 * Extrai os dados do formulário
 * @param {EventTarget} e 
 * @returns 
 */
export const extractFormData = (e) => {
    return {
        todo: e.target.todo.value
    }
}