import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubblesComponent } from './bubbles/bubbles.component';
const routes: Routes = [{ path: 'bubbles', component: BubblesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
