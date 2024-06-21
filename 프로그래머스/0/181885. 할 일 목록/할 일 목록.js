function solution(todo_list, finished) {
    let todo = new Map();
    
    todo_list.forEach((list, index) => {
        todo.set(list, finished[index]);
    })
    
    return Array.from(todo).filter(([list, status]) => !status).map(([task]) => task);
}