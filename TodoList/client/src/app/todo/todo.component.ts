import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 items = new Array();
  constructor() {
    
   }

  addItem(form){
    
     this.items.push(form.value.itemName);
     console.log(this.items);
  }

  delete(){
    this.items.pop();
  }

  ngOnInit() {
  }

 


}
