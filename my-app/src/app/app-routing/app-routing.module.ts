import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from '../list-item/list-item.component';
import { FormComponent } from '../form/form.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  { path: 'list', component: ListItemComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/home', }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
