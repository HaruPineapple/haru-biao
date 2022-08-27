// function List(todo1,todo2,todo3){
//     this.todo1=todo1;
//     this.todo2=todo2;
//     this.todo3=todo3;
// }
// var todoList=new List('买菜','买水果','买袜子');
// console.log(todoList)
 


// function Dog(){
//     this.age=12;
//     this.gender='male';
//     this.叫=function(){
//         console.log('muhahaha')
//     }
// }
// var 小白=new Dog();
// 小白.叫();
// console.log(小白);



// function Book(title){
//     this.title=title;
//     this.author='小白';
// }
// var book1=new Book('自我修养');
// var book2=new Book('烹饪手册');
// console.log('book1:',book1,'book2:',book2)


function Mission(todo1,todo2,todo3){
    this.first=todo1;
    this.second=todo2;
    this.third=todo3;
}
var todayTodo=new Mission('取快递','买牛奶','买蔬菜');
console.log('todayTodo:',todayTodo);