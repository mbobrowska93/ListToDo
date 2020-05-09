import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  public newField: Task;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private tasksService: TasksService) { }

  ngOnInit(): void {
    this.newField = this.tasksService.getEditItem();
  }

  updateTask() {
   this.tasksService.compare(this.newField);
   this.router.navigateByUrl('/list', {});
  }
}
