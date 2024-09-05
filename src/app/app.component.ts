import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent ,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  title = 'todo-list';
 constructor(){ 
//   setTimeout(() => {
//   this.title ="changed title";
// }, 2000);
}
}
