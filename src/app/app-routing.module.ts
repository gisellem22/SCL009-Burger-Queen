import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'waiter', component: WaiterComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: '', redirectTo: '/waiter', pathMatch: 'full' },
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
      { enableTracing: false } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
