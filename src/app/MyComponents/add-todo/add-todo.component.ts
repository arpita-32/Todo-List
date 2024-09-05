import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'] // corrected 'styleUrl' to 'styleUrls'
})
export class AddTodoComponent implements OnInit {
  
  title: string = '';  // Initialize with an empty string
  desc: string = '';   // Initialize with an empty string
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
   this.todoAdd.emit(todo);
  }
}
