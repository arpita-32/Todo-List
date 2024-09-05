import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule for directives like ngClass
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo; 
  @Input() i!: number;  // Ensure the index is passed in from the parent component
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();  // Emits the todo to be deleted
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();  // Emits the todo to toggle active status

  constructor() {}

  ngOnInit(): void {}

  // Method to handle the delete button click
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);  // Emit the todo object to parent component
    console.log(`Delete button clicked for: ${todo.title} at index: ${this.i}`);  // Log for debugging
  }

  // Method to handle the checkbox click (toggle active status)
  onCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);  // Emit the todo object to parent component
    console.log(`Checkbox clicked for: ${todo.title} at index: ${this.i}`);  // Log for debugging
  }
}
