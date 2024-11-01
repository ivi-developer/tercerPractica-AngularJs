import { Routes } from '@angular/router';
import { TaskPageComponent } from './task/pages/task-page/task-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { UpdateTareaComponent } from './task/components/update-tarea/update-tarea.component';

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
        path: '',
        component: InicioPageComponent
    },
    {
        path:'update',
        component:UpdateTareaComponent
    },
    {
        path: '**',
        redirectTo: 'Home'
    }

];
