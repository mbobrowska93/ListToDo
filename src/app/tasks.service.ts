import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private item: Task[] = [];
  private editItem: Task[] = [];

  constructor() { }

  writeOnTheList(e: string, f: string) {
    // dostajemy zadanie i komentarz w postaci stringow, i w tej metodce musimy do niej stworyc obiekt i mu te parametry dac
    console.log(e, f);
    const newItem: Task = new Task(e, f); // przekazanie nazwy dla obiektu Task
    this.item.push(newItem);
  }

  getData(): Task[] {
    return this.item;
  }

  remove(e: Task) {
    this.item = this.item.filter(x => x.action !== e.action);
  }

  edit(y: Task) {
    this.editItem.push(y);
  }

  getEditItem(): Task[] {
    return this.editItem;
  }
}
