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

  oneField: Task[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private tasksService: TasksService) { }

  ngOnInit(): void {
    this.oneField = this.tasksService.getEditItem();
  }

  saveTask(w: Task){
   ?????????????????????????????????????
  }
}
