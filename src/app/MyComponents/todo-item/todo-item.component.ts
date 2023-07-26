import { Component, Input, Output,EventEmitter } from '@angular/core';
import { dailytask } from 'src/app/dailytask';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() d: dailytask;
  @Output() del: EventEmitter<dailytask> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<dailytask> = new EventEmitter();
  onclick(d:dailytask){
    this.del.emit(d);
  }
  onCheckboxClick(d){
    this.todoCheckbox.emit(d)
  }
}
