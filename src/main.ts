

//Enum med de 3 olika viktighetsgraderna
enum Priority {
    high = 1,
    medium = 2,
    low = 3
}


//Interface Todo.
interface Todo {
    task: string;
    completed: boolean;
    priority: Priority;
}


