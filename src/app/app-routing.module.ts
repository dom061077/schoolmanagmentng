// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
//import { HomeComponent } from './home.component'; // Import your components
//import { DashboardComponent } from './dashboard.component'; // Import your components

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  //{ path: 'dashboard', component: DashboardComponent },
  // Add more routes as needed
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    //loadChildren: './auth/auth.module#AuthModule'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
