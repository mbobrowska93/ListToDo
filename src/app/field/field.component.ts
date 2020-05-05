import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Task } from '../task';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  public task: Task; // maybe should be string ?? *********
  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private tasksService: TasksService) { }

  ngOnInit(): void {
    this.task = { action: '', comment: '' };
    this.registerForm = this.formBuilder.group({
      action: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  addTask() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return; // co tu oznacza samo return?
    }
    this.tasksService.writeOnTheList(this.task.action, this.task.comment);
    this.router.navigateByUrl('/list', {}); // navigation to list component
  }
}
