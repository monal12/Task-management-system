import { Component } from '@angular/core';
import { dailytask } from 'src/app/dailytask';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  localItems: string;
  dailytask:dailytask[];
  constructor() {
       // this is constructor
       this.localItems=localStorage.getItem("dailytask");
       if(this.localItems==null)
       {
        this.dailytask = [];
       }else{
        this.dailytask=JSON.parse(this.localItems)
       }
    
  }
  deltodo(d:dailytask){
    const index=this.dailytask.indexOf(d);
    this.dailytask.splice(index,1)
    localStorage.setItem("dailytask", JSON.stringify(this.dailytask))
    }
    addTodo(d:dailytask){
      console.log(d);
      this.dailytask.push(d);
      localStorage.setItem("dailytask", JSON.stringify(this.dailytask))
    }
    toggleTodo(d:dailytask){
      const index=this.dailytask.indexOf(d);
      this.dailytask[index].active=!this.dailytask[index].active;
      localStorage.setItem("dailytask", JSON.stringify(this.dailytask))
    }
}
