import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './lib/header/header.component';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { LeftPaneComponent } from '../modules/dashboard/pages/left-pane/left-pane.component';
import { RightPaneComponent } from '../modules/dashboard/pages/right-pane/right-pane.component';
import { IconsModule } from '../icons/icons.module';
import { CompletedTasksComponent } from '../modules/dashboard/pages/completed-tasks/completed-tasks.component';
import { TaskInProgressComponent } from '../modules/dashboard/pages/task-in-progress-screen/task-in-progress.component';
import { TodoScreenComponent } from '../modules/dashboard/pages/todo-screen/todo-screen.component';


@NgModule({
  declarations: [
    LeftPaneComponent,
    RightPaneComponent,
    CompletedTasksComponent,
    TaskInProgressComponent,
    TodoScreenComponent
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    IconsModule
  ],
  providers: [DatePipe],
  exports: [
    LeftPaneComponent, RightPaneComponent, CompletedTasksComponent, TaskInProgressComponent, TodoScreenComponent
   ]
})
export class SharedModule { }
