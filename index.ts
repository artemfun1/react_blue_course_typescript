// let userName: string = '';
// let age: number = 1;

// let isActive: boolean = true;

// let str: unknown = 'some';

// let word: any = 'fhg';

// const error = (message: string): never => {
// 	throw new Error(message);
// };

// let name1: null | string = null;

// const numbers: Array<string | number | boolean> = [1, '', true];

// type User = {
// 	name: string;
// 	age: number;
//   loc: string
// };

// interface IUser{
//   name: string;
// 	age: number;
//   loc: string
// }

// const user: IUser = {
// 	name: '',
// 	age: 10,
//   loc: '',
// };



// enum Statuses {
//   Created = "Account created successfully",
//   NotFound = 404,
//   BadRequest = 400
// }


// console.log(Statuses.Created)


// function userInfo<T>(args: T): T{
//   console.log(args)
//   return args
// }

// userInfo('11')


// interface User<T, U>{
//   name:T,
//   age:U
// }

// type User<T,U> = {
//   name: T,
//   age: U
// }

// type User = {
//   name: string,
//   age: number
// }

// const user: User<string, number> = {
//   name:"A",
//   age: 1
// }


// function Decorator(target: Function){
//   target.prototype.name = 'Alex'
// }

// @Decorator
// class User {
//   name: string | undefined

//   printName(){
//     console.log(this.name)
//   }
// }

// const user = new User()

// console.log(user.name)
// console.log(typeof User)



// function Decorator(option: {name:string}){
//   return(target: Function) => {
//     target.prototype.name = option.name
//   }
// }

// function MethodDecorator(target:Object, propertyKey: string, propertyDescriptor:PropertyDescriptor){
//   console.log(propertyKey)
//   propertyDescriptor.value = function (...args: any[]) {
//     return `Hello ${args}`
//   }
// }

// function ParamDecorator(target: Object, propertyName: string, index: number){
//   console.log(propertyName, index)
// }

// @Decorator({
//   name:'Alex'
// })
// class User {
//   name: string | undefined 

//   @MethodDecorator
//   printName(@ParamDecorator name:string): string{
//     return name
//   }
// }

// const user = new User()

// console.log(user.name)
// console.log(typeof User)


// interface User {
//   name: string,
//   age: number
// }

// const user: Readonly<User> = {
//   name:'',
//   age:2
// }



// interface UserData {
//   name?: string
//   age?: number
// }

// const obj: UserData = {age:5}

// const obj2: Required<UserData> = {age:5}



// interface PageInfo {
//   title:string
// }

// type Route = 'home' | 'about' | 'contact'


// const example: Record<Route, PageInfo> = {
//   about: {title: 'about'},
//   contact: {title: 'contact'},
//   home: {title: 'home'}
// }


// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type TodoPreview = Pick<Todo, 'title' | 'completed'>


// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false
// }





interface TodoSchema {
  title: string
  description: string
  completed: boolean
}

type UserTodo = Omit<TodoSchema, 'description'>

const userTodo: UserTodo = {
  title: 'clean room',
  completed: false
}