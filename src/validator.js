/**
 * Valida a tarefa recebida do formulário
 * @param {string} todo 
 * @returns 
 */
export const validateTodo = (todo) => {
    if (!todo) {
        return "todo required."
    }
    if (todo.trim().length < 1) {
        return "todo cannot be empty."
    }
    return null
}