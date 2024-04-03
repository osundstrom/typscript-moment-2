

//Interface Todo.
interface Todo {
    task: string; 
    completed: boolean;
    priority: number;
};


//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//

const addTodo =document.getElementById("addTodo") as HTMLFormElement;
const taskInput:HTMLInputElement = document.getElementById("task") as HTMLInputElement;
const priorityInput:HTMLInputElement = document.getElementById("priority") as HTMLInputElement;

//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//

class TodoList {

    todos: Todo[];

addTodo(task: string, priority: number): boolean { 
    if (priority < 1) {//om prority är  mindre än 1, false
        console.log("false")
        return false; 
        }
    else if(priority > 3) {//om prority är  större än 3, false
        console.log("false")
            return false;
        }

    else if(task == "") {//Om task är tomt, false
        console.log("false")
        return false;
        
    }


}}








