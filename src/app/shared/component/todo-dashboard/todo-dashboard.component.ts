import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
 todoArr:Array<Itodo> = [
  {
    todoItem:"Javascript",
    todoRating:3.5
  },
  {
    todoItem:"Flex",
    todoRating:4.2
  },
  {
    todoItem:"SASS",
    todoRating:2.8
  }
 ]
  constructor() { }

  ngOnInit(): void {
  }

  ongetTodo(todo:Itodo){
  this.todoArr.push(todo)
  }

}
