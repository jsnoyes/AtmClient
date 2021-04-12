import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { RestockComponent } from './components/restock/restock.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';

const routes: Routes = [
  { path: 'withdraw', component: WithdrawalComponent },
  { path: 'restock', component: RestockComponent },
  { path: '**', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
