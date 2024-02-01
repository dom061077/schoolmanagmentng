import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar} from '@angular/material/toolbar';
import { MaterialModule } from './material-module';

import { MenubarComponent } from './sidebar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIcon,
    MatToolbar,
    MaterialModule
        

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
