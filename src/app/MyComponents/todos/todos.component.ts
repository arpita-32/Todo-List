import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null = null;
  todos: Todo[] = [];
  useLocalStorage: boolean = true;

  constructor() {
    // Check if localStorage is available
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.localItem = localStorage.getItem("todos");
      if (this.localItem) {
        this.todos = JSON.parse(this.localItem);
      }
    } else {
      // Fallback: Use in-memory storage or notify the user
      this.useLocalStorage = false;
      console.warn("localStorage is not available; data will not persist after the session ends.");
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      if (this.useLocalStorage) {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    if (this.useLocalStorage) {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
  ToggleTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo); // Find the index of the todo
    if (index > -1) { // Check if the todo exists in the array
      this.todos[index].active = !this.todos[index].active;
      if (this.useLocalStorage) {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
  }
  
}
