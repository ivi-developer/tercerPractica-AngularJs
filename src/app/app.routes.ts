import { Routes } from '@angular/router';
import { TaskPageComponent } from './task/pages/task-page/task-page.component';

export const routes: Routes = [
    {
        path: 'tasks',
        component: TaskPageComponent
    },
    {
        path: '',
        component: TaskPageComponent
    },
    {
        path: '**',
        component: TaskPageComponent
    }

];
