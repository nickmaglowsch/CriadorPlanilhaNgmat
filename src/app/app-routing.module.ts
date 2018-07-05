import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormularioEscalaComponent } from './formulario-escala/formulario-escala.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'FormularioEscalaComponent', component:FormularioEscalaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
