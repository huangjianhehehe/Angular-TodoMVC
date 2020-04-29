import { Component } from '@angular/core';

const todos = [
    {
      id:1,
      title:'吃饭',
      done:true
    },
    {
      id:2,
      title:'唱歌',
      done:false
    },
     {
      id:3,
      title:'写代码',
      done:true
    }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 导入列表数据
export class AppComponent {
  title = 'angular';
  public todos:{
    id:number,
    title:string,
    done:boolean
  }[] =todos

  addTodo (e):void{
    const titleText = e.target.value
    if (!titleText.length){
      return
    }
    const last = this.todos[todos.length-1]
    this.todos.push({
        id:last?last.id+1:1,
        title:titleText,
        done:false
    })
    e.target.value=""
    console.log(this.todos)
  }
}
