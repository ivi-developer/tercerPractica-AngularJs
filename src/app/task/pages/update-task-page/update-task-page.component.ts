import { Component } from '@angular/core';
import { UpdateTaskComponent } from '../../components/update-task/update-task.component';

@Component({
  selector: 'app-update-task-page',
  standalone: true,
  imports: [UpdateTaskComponent],
  templateUrl: './update-task-page.component.html',
  styleUrl: './update-task-page.component.css'
})
export class UpdateTaskPageComponent {

}
