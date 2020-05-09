import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  positions: Task[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private tasksService: TasksService) { }

  ngOnInit(): void {
    this.positions = this.tasksService.getData();
    console.log(this.positions);
  }

  removeTask(positions: Task) {
    this.tasksService.remove(positions);
    this.positions = this.tasksService.getData();
  }

  editTask(positions: Task) {
    this.tasksService.edit(positions);
    this.router.navigateByUrl('/edit', {});
  }
}
