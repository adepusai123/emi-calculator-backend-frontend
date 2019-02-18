import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { EmiTableComponent } from './emi-table/emi-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/emi', pathMatch: 'full' },
  { path: 'emi', component: EmiCalculatorComponent },
  { path: 'table', component: EmiTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
