import { Routes } from '@angular/router';
import { TaskPageComponent } from './task/pages/task-page/task-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { UpdateTaskPageComponent } from './task/pages/update-task-page/update-task-page.component';


export const routes: Routes = [
    {
        path: 'Home',
        component: InicioPageComponent
    },
    {
        path: 'tasks',
        component: TaskPageComponent
    },
    {
        path: 'update/:id',
        component: UpdateTaskPageComponent
    },
    {
        path: '',
        component: InicioPageComponent
    },
    {
        path: '**',
        redirectTo: 'Home'
    }

];
