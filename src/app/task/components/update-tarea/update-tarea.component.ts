import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-tarea.component.html',
  styleUrl: './update-tarea.component.css'
})
export class UpdateTareaComponent {
  fb=inject(FormBuilder)
  form=this.fb
}
