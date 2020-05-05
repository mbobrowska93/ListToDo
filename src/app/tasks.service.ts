import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private task: Task[] = [];

  constructor() { }

  writeOnTheList(e: string, f: string) {
    // dostajemy zadanie i komentarz w postaci stringow, i w tej metodce musimy do niej stworyc obiekt i mu te parametry dac
    console.log(e, f);
    const item: Task = new Task(e, f); // przekazanie nazwy dla obiektu Task
    this.task.push(item);
  }

  getData(): Task[] {
    return this.task;
  }

  remove(e: Task) {
    this.task = this.task.filter(x => x.action !== e.action);
  }

  edit(e: Task) {

  }
}
