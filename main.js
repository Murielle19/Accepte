"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_1 = require("./date");
var Priority_1 = require("./Priority");
var task_1 = require("./task");
var project_1 = require("./project");
//date 
var new_date = new date_1.Date1.Date1(1990, 12, 3);
console.log(new_date.toString());
//priority
var new_prio = Priority_1.Priority.Urgent;
//task
var new_task = new task_1.Task.Task("Be the best", new_date.toString(), new_prio, false);
var new_task2 = new task_1.Task.Task("Learn", new_dat.toString(), new_prio, false);
console.log(new_task.toString());
//project
var ar = [new_task, new_task2];
var n_Projet = new project_1.Projet.Projet(ar);
