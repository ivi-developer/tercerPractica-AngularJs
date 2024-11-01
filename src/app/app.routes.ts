import { Routes } from '@angular/router';
import { TaskPageComponent } from './task/pages/task-page/task-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';

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
        path: '**',
        redirectTo: 'Home'
    }

];
