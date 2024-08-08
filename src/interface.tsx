export interface ITodo{
    assignedTo : string,
    content: string,
    timeStamp: string
}

export interface ITodoContext{
    todos: ITodo[],
    addTodo: (todo: ITodo) => void;
    removeTodo: (todo: ITodo) => void;
}