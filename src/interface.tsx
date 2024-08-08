export interface ITodo{
    assignedTo : string,
    content: string,
    timeStamp: string,
    isDone: boolean
}

export interface ITodoContext{
    todos: ITodo[],
    addTodo: (todo: ITodo) => void;
    removeTodo: (todo: ITodo) => void;
    toggleDone: (todo: ITodo) => void;
}