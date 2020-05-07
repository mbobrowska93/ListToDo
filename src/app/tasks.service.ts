import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private item: Task[] = [];
  private editItem: Task;
  updateItem: Task;

  constructor() { }

  writeOnTheList(e: string, f: string, i: string) {
    // dostajemy zadanie i komentarz w postaci stringow, i w tej metodce musimy do niej stworyc obiekt i mu te parametry dac
    console.log(e, f);
    const newItem: Task = new Task(e, f, i); // przekazanie nazwy dla obiektu Task
    this.item.push(newItem);
  }

  getData(): Task[] {
    return this.item;
  }

  remove(e: Task) {
    this.item = this.item.filter(x => x.action !== e.action);
  }

  edit(y: Task) {
    // this.editItem.push(y);
    this.editItem = y;
  }

  getEditItem(): Task {
    return this.editItem;
  }

  compare(updatedItem: Task) {

    // pobranie obiektu z tablicy po jego id, ktorepowinno byc takie same jak tego updatedItem
    let updateItem = this.item.find(this.findIndexToUpdate, updatedItem.id);
    let index = this.item.indexOf(updateItem);
    this.item[index] = updatedItem;
  }
  findIndexToUpdate(updatedItem) {
    // przyrownanie id 
    return updatedItem.id === this;
  }

}
