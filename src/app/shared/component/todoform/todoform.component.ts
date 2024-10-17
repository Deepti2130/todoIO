import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
@Output() todoEmiter:EventEmitter<Itodo> = new EventEmitter<Itodo>()
  constructor() { }

  ngOnInit(): void {
  }

  ontodoAdd(todoform:NgForm){
  if(todoform.valid){
    console.log(todoform.value)

    let todoobj = {...todoform.value, todoRating: +todoform.controls['todoRating'].value}
    console.log(todoobj);
    todoform.reset()
    this.todoEmiter.emit(todoobj)
  }
  }
}
