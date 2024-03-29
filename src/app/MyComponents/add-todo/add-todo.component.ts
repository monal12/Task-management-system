import { Component,EventEmitter,Output } from '@angular/core';
import { dailytask } from 'src/app/dailytask';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:string;
  desc:string;
  duedate:Date;
  priority:string;
  @Output() todoAdd: EventEmitter<dailytask>= new EventEmitter();
  onSubmit(){
    const todo={
      sno: 8,
      title: this.title,
      desc: this.desc,
      duedate:this.duedate,
      priority: this.priority,
      active: true
    }
    this.todoAdd.emit(todo)
  }
}
