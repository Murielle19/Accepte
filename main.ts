import { Date1 } from './date';
import { Priority } from './Priority'; 
import { Task } from './task';
import { Projet } from './project'; 

//date 
let new_date:Date1.Date1=new Date1.Date1(1990,12,3);
console.log(new_date.toString());

//priority
let new_priori:Priority=Priority.Urgent;

//task
let new_task:Task.Task=new Task.Task("Be the best",new_date.toString(),new_priori,false);

let new_task2:Task.Task=new Task.Task("Learn",new_dat.toString(),new_prio,false);
console.log(new_task.toString());

//project
let ar:Task.Task=[new_task,new_task2];
let n_Projet:Projet.Projet=new Projet.Projet(ar);