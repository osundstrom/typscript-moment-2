

//Interface för Todo, sätter typ på respektive. 
interface Todo {
    task: string; 
    priority: number;
    completed: boolean;
};



class TodoList { //klass TodoList

    todos: Todo[] = []; //Tom array

//----------------------------------------------------------------------------------//


constructor(task: string, priority: number, completed: boolean) {
    this.loadFromLocalStorage(); //laddar Todos från localStorage.
};



addTodo(task: string, priority: number): boolean { 

    if(task == task.trim()) {//Task kan ej vara tomt
        console.log("falseTask")
        return false;

    }
    if (priority < 1) {//om prority är  mindre än 1, false
        console.log("falsePrio")
        return false; 
        }
    if(priority > 3) {//om prority är  större än 3, false
        console.log("falsePrio")
            return false;
        }
    if(isNaN(priority)) { //Om det är NaN (inte ett nummer)
        console.log("falsePrio")
        return false;
    }

    else {

        //om inget probelm hittades ny Todo
    const newTodo: Todo = {
        task: task,
        priority: priority,
        completed: false
    };
  
    this.todos.push(newTodo); //lägger till nya todon i todos. 

    this.saveToLocalStorage(); //sparar till localstorage
    console.log("retuirn true")
    return true; } //blir true och inte false som om något var fel. 

}
//----------------------------------------------------------------------------------//


//Markerar som klar
markTodoCompleted(todoIndex: number): void {
    if (todoIndex >= 0 && todoIndex < this.todos.length) { //todoIndex mellan 0 och todos längd. 
        this.todos[todoIndex].completed = true; //sätter den till klar eller completed till true. 

        this.todos = this.todos.filter((todo, index) => index !== todoIndex);// filtrerar todos, kollar om index är skilt från todoIndex, alltså att de ska behållas.
        this.saveToLocalStorage();//sparar till localstorage
    }
}

//----------------------------------------------------------------------------------//

//Hämta allt i todos listan. 
getTodos(): Todo[] {
    return this.todos;
}

//----------------------------------------------------------------------------------//

//spara till localstorage
saveToLocalStorage(): void{ 
    localStorage.setItem("todos", JSON.stringify(this.todos)); //sparar som en sträng
}

//----------------------------------------------------------------------------------//



//Laddar in todos från localstorage
loadFromLocalStorage(): void{
    const stored = localStorage.getItem("todos");  //hämtar från localstorage
    if (stored) {
        this.todos = JSON.parse(stored); //Sätter listan utifrån de sparade samt parsar.
    }
}

//ta bort en todo
deleteTodo(deleteIndex:number): void {
    if (deleteIndex>= 0 &&deleteIndex<this.todos.length) { //deleteindex längd mellan 0 och todos längd. 
        this.todos.splice(deleteIndex, 1);//Tar bort
        this.saveToLocalStorage();//sparar till localstorage
    }
}

//Radera alla todos (hela listan)
deleteAllTodos(): void {
    this.todos = []; //rensar hela listan
    this.saveToLocalStorage(); //sparar till localstorage
}


}



//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//



//Helaform
const addTodoForm:HTMLFormElement = document.getElementById("addTodo") as HTMLFormElement;
//input task
const taskInput:HTMLInputElement = document.getElementById("task") as HTMLInputElement;
//input priority
const priorityInput:HTMLInputElement = document.getElementById("priority") as HTMLInputElement;
//Knapp lägga till
const addTodoButton:HTMLButtonElement = document.getElementById("todoButton") as HTMLButtonElement;
//Knapp deleta alla
const deleteButton: HTMLButtonElement = document.getElementById("deleteList") as HTMLButtonElement;

//För listan (UL)
const todoListElement:HTMLUListElement = document.getElementById("todoList") as HTMLUListElement;

//skapar ny
const todoList = new TodoList(); 

//funktion för att visa todos
function displayTodos() {
    if(todoListElement){ 
    todoListElement.innerHTML = "";} //sätter den till tom

    const allTodos = todoList.getTodos(); // hämtar allt från TodoList

    allTodos.forEach((todo, x) => { //Kollar varje todo 

        const todoLI = document.createElement("li"); //skapar li

        const todoDiv = document.createElement("div"); //skapar div

        const todoComplete = document.createElement("button"); //skapar button
                todoComplete.innerText = "klar" //Button text sätts till klar

        const todoHr = document.createElement("hr")//Skapar hr

        todoComplete.addEventListener("click", () => { //vid klick på kanppen 
            todoList.markTodoCompleted(x); // todoList anropas till markTodoCompleted med x värdet (den man klickade på)
            displayTodos();//kallar diplayTodos
        })

        const todoText = document.createTextNode(todo.task) //texnode för todo.task

        todoDiv.appendChild(todoText); //lägger in text i div
        todoDiv.appendChild(todoHr); //Lägger till hr i div
        todoDiv.appendChild(todoComplete); //lägger till klar knappen i div
        todoLI.appendChild(todoDiv); //lägger till div i li
        todoListElement.appendChild(todoLI); //LÄgger till todoLI till UL-listan


    })}




//eventlistener som kör displaytodos då sidan laddas in
document.addEventListener("DOMContentLoaded", function() { 
    displayTodos(); //kör displaytodods
});


//Vid klick på deleteButton raderas alla i listan
deleteButton.addEventListener("click", function() {
    todoList.deleteAllTodos();
    displayTodos(); //Kör displayTodods
});



//vid klick körs e
addTodoButton.addEventListener("click", function(e) {
    e.preventDefault(); // hindra standardbeteende

    const task = taskInput.value //task är taskinpuits värde
      
    const priority = parseInt(priorityInput.value); //priority är priorityinputs värde 

    let priorityText; //sätte priority text 
    switch (priority) {
        case 1:
            priorityText = "låg"; //OM värde 1 på priority
            break;
        case 2:
            priorityText = "mellan"; //OM värde 2 på priority
            break;
        case 3:
            priorityText = "hög"; //OM värde 3 på priority
            break; 
    }
    
    const added = todoList.addTodo(task +" - (Prio: "+ priorityText + ")" , priority); // sätter added till de inmatade värdena, priority visas aldrig då det endast skulle visats en siffra mellan 1-3. 

    if (added) { //om den blir tillagd
        taskInput.value = ""; //rensa
        priorityInput.value = ""; //rensa
        displayTodos(); //kör displayTodos
}});


