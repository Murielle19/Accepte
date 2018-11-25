import { Task } from './task';

export module Projet{
export class Projet{

    public _tasks : Task.Task[];

    constructor(task:Task.Task[]){
        this._tasks=task;
    }

    get tasks (): Task.Task[] {
        return this._tasks;
    }

    set tasks (tasks:Task.Task[]){
        this._tasks=tasks;
    }

     addtask ( tasks:Task.Task[] , Ntask:Task.Task) : Task.Task[] {
        tasks[tasks.length] = Ntask;
        return tasks;
    }

    getTask ( tasks:Task.Task[], position:number ) : Task.Task{
        let TachPosition : Task.Task = tasks[position];
        return TachPosition;
    }

     deleteTask ( tasks:Task.Task[], position:number ) : Task.Task[] {
        tasks[position] = null;
        let permuter : Task.Task;

        for (let _i = position; _i < tasks.length; _i++) {
            permuter=tasks[_i];
            tasks[_i]=tasks[_i+1];
            tasks[_i+1]=permuter;
        }
        return tasks;
    }

     all ( tasks:Task.Task[] ) {

        for(let _i = 0; _i < tasks.length; _i++){
            console.log(tasks[_i]);
        }

    }

     complete ( tasks:Task.Task[] ) {

        for(let _i = 0; _i < tasks.length; _i++){

            if(tasks[_i]._checked = true){
                console.log(tasks[_i]);
            }

        }

    }

     uncomplete ( tasks:Task.Task[] ) {

        for(let _i = 0; _i < tasks.length; _i++){

            if(tasks[_i]._checked = false){
                console.log(tasks[_i]);
            }

        }

    }  
}    
}