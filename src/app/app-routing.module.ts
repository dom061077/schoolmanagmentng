// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './home.component'; // Import your components
//import { DashboardComponent } from './dashboard.component'; // Import your components

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  //{ path: 'dashboard', component: DashboardComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
